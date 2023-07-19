import HazardInfoVariantA from '@/components/VariantA/HazardInfo/HazardInfoVariantA';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function HazardInfo() {
  return (
    <>
      <NextSeo
        title="Hazard Info"
        description="Database for the storage of completed hazard forms."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Hazard Info',
          description: 'Database for the storage of completed hazard forms.',
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
        <HazardInfoVariantA />
      </main>
    </>
  )
}
