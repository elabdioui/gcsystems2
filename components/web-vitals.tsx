'use client';

import { useEffect } from 'react';
import { onCLS,  onLCP, onFCP, onTTFB } from 'web-vitals';
import { usePathname, useSearchParams } from 'next/navigation';

export function WebVitals() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Utilisez l'URL complète pour le reporting
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    // Fonction pour envoyer les métriques à Vercel Analytics
    const sendToAnalytics = (metric: any) => {
      // Ceci enverra les métriques à Vercel Analytics
      // Vous pouvez également les envoyer à votre propre backend
      const body = {
        dsn: 'https://vitals.vercel-analytics.com/v1/vitals',
        id: metric.id,
        page: url,
        href: location.href,
        event_name: metric.name,
        value: metric.value.toString(),
        speed: 'slow', // Connexion présumée lente pour les tests
      };

      if ('function' === typeof navigator.sendBeacon) {
        navigator.sendBeacon(body.dsn, JSON.stringify(body));
      } else {
        fetch(body.dsn, {
          body: JSON.stringify(body),
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    };

    // Surveillez toutes les métriques des Core Web Vitals
    onCLS(sendToAnalytics);
    onLCP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, [pathname, searchParams]);

  return null;
}

export default WebVitals;
