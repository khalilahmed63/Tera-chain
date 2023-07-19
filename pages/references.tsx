import ReferencesVariantA from '@/components/VariantA/References/ReferencesVariantA';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function HazardInfo() {
  return (
    <>
      <NextSeo
        title="References"
        description=" Storage area for all the references that are used in TERACHAIN"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'References',
          description: ' Storage area for all the references that are used in TERACHAIN',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <main>
      <ReferencesVariantA />
      </main>
    </>
  )
}
