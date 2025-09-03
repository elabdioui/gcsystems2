'use client';

import { usePathname } from 'next/navigation';

interface JsonLdProps {
  organizationName?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    email: string;
    contactType: string;
  };
  sameAs?: string[];
}

export default function JsonLd({
  organizationName = 'GC SYSTEMS',
  url = 'https://gcsystems.ma',
  logo = 'https://gcsystems.ma/logo.png',
  contactPoint = {
    telephone: '+212522000000',
    email: 'contact@gcsystems.ma',
    contactType: 'customer service',
  },
  sameAs = [
    'https://www.facebook.com/gcsystems',
    'https://www.linkedin.com/company/gcsystems',
  ],
}: JsonLdProps) {
  const pathname = usePathname();
  const currentUrl = `${url}${pathname}`;

  // Données JSON-LD pour l'organisation
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationName,
    url: url,
    logo: logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactPoint.telephone,
      email: contactPoint.email,
      contactType: contactPoint.contactType,
    },
    sameAs: sameAs,
  };

  // Données JSON-LD pour le site web
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: organizationName,
    url: url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Données JSON-LD pour la page actuelle
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pathname === '/' ? 'Accueil' : pathname.replace('/', '').charAt(0).toUpperCase() + pathname.replace('/', '').slice(1),
        item: currentUrl,
      },
    ],
  };

  // Données JSON-LD pour les services locaux (LocalBusiness)
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: organizationName,
    image: logo,
    '@id': url,
    url: url,
    telephone: contactPoint.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Rue des Exemples',
      addressLocality: 'Casablanca',
      postalCode: '20000',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5731104,
      longitude: -7.5898434,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: sameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}
