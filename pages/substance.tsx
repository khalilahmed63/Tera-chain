import SubstanceVariantA from '@/components/VariantA/Substance/SubstanceVariantA';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

export default function Terabuilder() {
    return (
        <>
            <NextSeo
                title="Substance Form & Tables"
                description="Substance Form & Tables"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Substance Form & Tables',
                    description: 'Substance Form & Tables',
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
                <SubstanceVariantA />
            </main>
        </>
    )
}
