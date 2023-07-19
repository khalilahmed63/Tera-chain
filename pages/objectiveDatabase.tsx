import ObjectiveDatabaseVariantA from '@/components/VariantA/ObjectiveDatabase/ObjectiveDatabaseVariantA';
import ReferencesVariantA from '@/components/VariantA/References/ReferencesVariantA';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function HazardInfo() {
  return (
    <>
      <NextSeo
        title="Objective Database"
        description="A shared objective database which allows users to share their TERAs across all industries. User specific details are scrubbed from a TERA to ensure confidentiality. "
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Objective Database',
          description: 'A shared objective database which allows users to share their TERAs across all industries. User specific details are scrubbed from a TERA to ensure confidentiality. ',
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
        <ObjectiveDatabaseVariantA />
      </main>
    </>
  )
}
