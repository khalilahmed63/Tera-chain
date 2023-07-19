import ChemicalDataBasesVariantA from '@/components/VariantA/ChemicalDataBases/ChemicalDataBasesVariantA'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'

export default function chemicalDatabases() {
  return (
    <>
      <NextSeo
        title="Chemical Databases"
        description="Database for the storage of completed hazard forms."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Chemical Databases',
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
        <ChemicalDataBasesVariantA />
      </main>
    </>
  )
}
