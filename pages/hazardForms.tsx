import Head from 'next/head'
import HazardFormsVariantA from '@/components/VariantA/HazardForms/HazardFormsVariantA'
import { NextSeo } from 'next-seo'

export default function HazardForms() {
  return (
    <>
      <NextSeo
        title="Hazard Forms"
        description=" Blank hazard forms that allow users to populate the required hazard information for standardization. Choose the right form for you below. "
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Hazard Forms',
          description: ' Blank hazard forms that allow users to populate the required hazard information for standardization. Choose the right form for you below. ',
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
        <HazardFormsVariantA />
      </main>
    </>
  )
}
