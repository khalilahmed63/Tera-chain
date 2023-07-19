import Main from '@/components/VariantA/Layouts/Main';
import SearchBar from '@/components/VariantA/SearchBar/SearchBar';
import { Button, Checkbox } from '@mantine/core';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
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
          <div className="md:flex justify-between mt-6 md:mt-10">
            <div className="md:flex">
              <div className="">
                <Link href="/dataLibrary">
                  <div className=" hover:bg-gray-200 hover:text-black rounded-full p-1">
                    <BiArrowBack size={25} />
                  </div>
                </Link>
              </div>
              <h1 className="text-center font-bold text-2xl md:ml-4">{slug}</h1>
            </div>
            <div className="">
              <div className="flex items-end mx-auto md:mx-0">
                <Button className="bg-[#38576B] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Add to Company Repository</Button>
              </div>
            </div>
          </div>
          <div className="mx-auto my-10">
            <div className="mt-4 border-[#6B94B3] border-b-8">
              <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-white uppercase bg-[#6B94B3]">
                    <tr>
                      <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                        Risk Statements
                      </th>
                      <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                        Hazard Statements
                      </th>
                      <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                        GHS Categories
                      </th>
                      <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                        Route
                      </th>
                      <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="bg-white ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R45(1) </p>
                            <p>Cancer – Known</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R46(1)</p>
                            <p>Mutagen – Known</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R49(1)</p>
                            <p> Cancer by inhalation – Known</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R60(1)</p>
                            <p> Impairs Fertility – Known</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R61(1) </p>
                            <p>Harm to unborn child – Known</p>
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">H340</p>
                            <p> May cause genetic defects</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">H350</p>
                            <p> May cause cancer</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">H360</p>
                            <p>  May damage fertility/unborn child</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">Carcinogenicity</p>
                            <p>  Cat. 1A – Known</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">Germ Cell Mutagenicity </p>
                            <p> Cat. 1A – Known</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">  Reproductive Toxicity</p>
                            <p> Cat. 1A – Known</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        CMR
                      </td>
                      <td rowSpan={5} className="px-6 py-4 border-2 border-gray-300">
                        5
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-100">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R26 </p>
                            <p>Very toxic by inhalation</p>
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">H330</p>
                            <p>Fatal if inhaled</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">Aspiration Toxicity  </p>
                            <p>Cat. 1A – Known</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">Acute Toxicity  </p>
                            <p>Cat. 1 – Severe</p>
                          </div>
                        </div>
                        <div className="ml-8">
                          <div className="flex mt-5">
                            <Checkbox
                              label=""
                            />
                            <div className="ml-3 flex">
                              <p className="font-bold mr-1">Gases:</p>
                              <p>≤ 100 ppm</p>
                            </div>
                          </div>
                          <div className="flex mt-5">
                            <Checkbox
                              label=""
                            />
                            <div className="ml-3 flex">
                              <p className="font-bold mr-1">Vapors: </p>
                              <p>≤ 0.5 mg/L</p>
                            </div>
                          </div>
                          <div className="flex mt-5">
                            <Checkbox
                              label=""
                            />
                            <div className="ml-3 flex">
                              <p className="font-bold mr-1">Dusts & Mists</p>
                              <p>: ≤ 0.05 mg/L</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">

                      </td>
                    </tr>
                    <tr className="border-b bg-white ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R27 </p>
                            <p>Very toxic in contact with skin</p>
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">H310</p>
                            <p>Fatal in contact with skin</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">Skin</p>
                            <p>{"Cat. 1A – Corrosion Exp < 3 min"}</p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">Acute Toxicity </p>
                            <p>Cat. 1 – Severe</p>
                          </div>
                        </div>
                        <div className="ml-8">
                          <div className="flex mt-5">
                            <Checkbox
                              label=""
                            />
                            <div className="ml-3 flex">
                              <p className="font-bold mr-1">Dermal:</p>
                              <p> ≤ 50 mg/kg</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-100">
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">R28</p>
                            <p>Very toxic if swallowed</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">H300</p>
                            <p>Fatal if swallowed</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">Acute Toxicity </p>
                            <p>{"Cat. 1 – Severe"}</p>
                          </div>
                        </div>
                        <div className="ml-8">
                          <div className="flex mt-5">
                            <Checkbox
                              label=""
                            />
                            <div className="ml-3 flex">
                              <p className="font-bold mr-1">Oral:</p>
                              <p>  ≤ 5 mg/kg</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        ING
                      </td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-6 py-4 border-2 border-gray-300">

                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">H370</p>
                            <p>Causes damage to organs</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        <div className="flex mt-5">
                          <Checkbox
                            label=""
                          />
                          <div className="ml-3">
                            <p className="font-bold">TOST Single Exposure </p>
                            <p>{"Cat. 1 – Significant"}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-2 border-gray-300">
                        TOST
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </Main>
    </>
  )
}
