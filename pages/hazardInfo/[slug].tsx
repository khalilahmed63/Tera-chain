import Main from '@/components/VariantA/Layouts/Main';
import SearchBar from '@/components/VariantA/SearchBar/SearchBar';
import { Button } from '@mantine/core';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';

export default function Home(props: any) {
  const router = useRouter();
  const { slug } = router.query;
  fetch('/api/hello?name=khalil')
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error(error));
  return (
    <>
      <NextSeo
        title={`${slug}`}
        description={`${slug}`}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: `${slug}`,
          description: `${slug}`,
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
      <Main>
        <div className="relative pb-6">
          <div className="absolute">
            <Link href="/hazardInfo">
              <div className="hover:bg-gray-200 hover:text-black rounded-full p-1">
                <BiArrowBack size={25} />
              </div>
            </Link>
          </div>
          <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">{slug}</h1>
          <p className="text-center mt-2 tracking-wide">
            Search by substance name, CAS#, manufacture, or product use.
          </p>
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto mt-6">
            <SearchBar />
          </div>
          <div className="overflow-auto">
            <div className="mt-2 md:m-6 md:px-0 sm:py-6 rounded-md min-w-[60rem]">
              <p className="text-lg font-bold mb-2">
                Search Result
              </p>
              <table >
                <thead>
                  <tr>
                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'> Chemical Name</p></th>
                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Product Number</p></th>
                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Product Use </p></th>
                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Airborn Exposure Potential</p></th>
                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Dermal Contact Potential </p></th>
                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Health Hazard</p></th>
                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Action</p></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><p className='bg-gray-100 rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'></p></td>
                    <td><p className='bg-gray-100 rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                    <td><p className='bg-gray-100 rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                    <td><p className='bg-gray-100 rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                    <td><p className='bg-gray-100 rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                    <td><p className='bg-gray-100 rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                    <td>
                      <div className="flex items-center justify-center">

                        <Button className="bg-[#38576B] hover:!bg-gray-400">View</Button>
                        <Button className="bg-[#38576B] hover:!bg-gray-400 ml-1">Add to Your Database </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}
