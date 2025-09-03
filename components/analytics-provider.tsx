'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function AnalyticsProvider() {
  return (
    <>
      {/* Vercel Analytics - Chargement différé et optimal */}
      <Script
        strategy="afterInteractive"
        src="https://va.vercel-scripts.com/v1/script.js"
        data-website-id="your-vercel-analytics-id"
      />
      
      {/* Google Tag Manager - Si utilisé */}
      <Script
        strategy="afterInteractive"
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXX');
          `,
        }}
      />
    </>
  )
}