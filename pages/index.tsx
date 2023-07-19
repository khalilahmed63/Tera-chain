import Head from 'next/head'
import HomepageVariantA from '@/components/VariantA/HomePage/HomepageVariantA';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Resource Center"
        description="The center point for chaining all Task Exposure Risk Assessment (TERA) information together on a unified network that may be used by all users."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Resource Center',
          description: 'The center point for chaining all Task Exposure Risk Assessment (TERA) information together on a unified network that may be used by all users.',
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
        <HomepageVariantA />
      </main>
    </>
  )
}
