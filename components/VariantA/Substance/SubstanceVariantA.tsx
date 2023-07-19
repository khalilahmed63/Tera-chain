import React, { useState } from 'react'
import Main from '../Layouts/Main';
import { Button, Card, Checkbox, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

export default function SubstanceVariantA() {
    const [toggle, setToggle] = useState(false);
    function Demo() {
        const form = useForm({
            initialValues: {
                email: '',
                termsOfService: false,
            },

            validate: {
                email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            },
        });
    }
    return (
        <Main>
            <div className="relative">
                <div className="my-10">
                    <div className="flex">
                        <Link href="/hazardInfo">
                            <div className=" hover:bg-gray-200 hover:text-black rounded-full p-1 mr-4">
                                <BiArrowBack size={25} />
                            </div>
                        </Link>
                        <p className="text-2xl font-bold">
                            Substance Form & Tables
                        </p>
                    </div>

                    <div className="mt-10 flex items-center">
                        <p className="text-sm ">
                            Form 01a (Blank)
                        </p>
                    </div>
                    <div className="mt-4 border border-[#6B94B3] border-b-8">
                        <p className="pl-6 py-4 bg-[#6B94B3] text-white">
                            Substance Form
                        </p>
                        <div className=" p-4 md:px-0 sm:py-6 rounded-md">
                            <p className="font-bold ml-6 mb-3">
                                Indentification
                            </p>
                            <form>
                                <div className="md:flex flex-wrap w-full">
                                    <div className='w-full sm:!w-[22%] md:ml-6 mb-3'>
                                        <TextInput
                                            // withAsterisk
                                            label="Substance Name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className='w-full sm:!w-[22%] md:ml-6 mb-3'>
                                        <TextInput
                                            label="CAS #"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className='w-full sm:!w-[22%] md:ml-6 mb-3'>
                                        <TextInput
                                            label="RTECS #"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className='w-full sm:!w-[22%] md:ml-6 mb-3'>
                                        <TextInput
                                            label="Synonyms"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className='w-full sm:!w-[22%] md:ml-6 mb-3'>
                                        <TextInput
                                            label="Conversion for 1 ppm (mg/m3)"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className=" md:px-0 sm:py-6 rounded-md m-6">
                            <p className="font-bold mb-3">
                                Physical & Chemical Properties
                            </p>
                            <Card
                                sx={(theme) => ({
                                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                    color: theme.colorScheme === 'dark' ? 'black' : 'black',
                                })}
                                p="lg"
                                className="mt-2 sm:py-6 rounded-md"
                            >
                                <div>
                                    <div className="md:flex flex-wrap border-b-2 pb-6">
                                        <div>
                                            <Select
                                                label="Phycial State"
                                                placeholder="Choose Type"
                                                className='w-full sm:w-44 mb-3'
                                                data={[
                                                    { value: 'react', label: 'React' },
                                                    { value: 'ng', label: 'Angular' },
                                                    { value: 'svelte', label: 'Svelte' },
                                                    { value: 'vue', label: 'Vue' },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Color"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Odor"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                label="Class #"
                                                placeholder="Pick one"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                                data={[
                                                    { value: 'react', label: 'React' },
                                                    { value: 'ng', label: 'Angular' },
                                                    { value: 'svelte', label: 'Svelte' },
                                                    { value: 'vue', label: 'Vue' },
                                                ]}
                                            />
                                        </div>
                                        <div className="flex items-end mx-auto md:mx-0">
                                            <Button className="bg-[#38576B] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Add Additional State</Button>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="md:flex flex-wrap items-end mt-6">
                                            <div>
                                                <TextInput
                                                    label="Boiling Point"
                                                    placeholder=""
                                                    className='w-full sm:w-44 mb-3'
                                                />
                                            </div>
                                            <div>
                                                <Select
                                                    label=""
                                                    placeholder="°F"
                                                    className='w-full sm:w-20 md:ml-3 mb-3'
                                                    data={[
                                                        { value: 'react', label: 'React' },
                                                        { value: 'ng', label: 'Angular' },
                                                        { value: 'svelte', label: 'Svelte' },
                                                        { value: 'vue', label: 'Vue' },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    label="Molecular Weight"
                                                    placeholder="0 g/mol"
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>

                                            <div>
                                                <TextInput
                                                    label="Solubility"
                                                    placeholder="0 %"
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    label="Flash Point"
                                                    placeholder=""
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>
                                            <div>
                                                <Select
                                                    label=""
                                                    placeholder="°F"
                                                    className='w-full sm:w-20 md:ml-3 mb-3'
                                                    data={[
                                                        { value: 'react', label: 'React' },
                                                        { value: 'ng', label: 'Angular' },
                                                        { value: 'svelte', label: 'Svelte' },
                                                        { value: 'vue', label: 'Vue' },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    label="Vapor Pressure "
                                                    placeholder="0 mm/Hg"
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-wrap py-6">
                                        <div>
                                            <TextInput
                                                label="Evaporation Rate"
                                                placeholder="0 hrs"
                                                className='w-full sm:w-44 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Vapor Hazard Ratio (VHR)"
                                                placeholder="0"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Vapor Density"
                                                placeholder="0"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Particle Size"
                                                placeholder="0 µm"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Specific Gravity"
                                                placeholder="0 µm"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <p className="text-sm ">
                            Form 01a (Blank)
                        </p>
                    </div>
                    <div className="mt-4 border border-[#6B94B3] border-b-8">
                        <p className="pl-6 py-4 bg-[#6B94B3] text-white">
                            Substance Form
                        </p>
                        <div className=" p-4 md:px-0 sm:py-6 rounded-md">
                            <p className="font-bold ml-6 mb-3">
                                Indentification
                            </p>
                            <form>
                                <div className="md:flex flex-wrap">
                                    <div>
                                        <TextInput
                                            // withAsterisk
                                            label="Substance Name"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            label="CAS #"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            label="Synonyms"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            label="Conversion for 1 ppm (mg/m3)"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className=" md:px-0 sm:py-6 rounded-md m-6">
                            <p className="font-bold mb-3">
                                Physical & Chemical Properties
                            </p>
                            <Card
                                sx={(theme) => ({
                                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                    color: theme.colorScheme === 'dark' ? 'white' : 'black',
                                })}
                                p="lg"
                                className="mt-2 sm:py-6 rounded-md"
                            >
                                <div>
                                    <div className="md:flex flex-wrap border-b-2 pb-6">
                                        <div>
                                            <Select
                                                label="Phycial State"
                                                placeholder="Choose Type"
                                                className='w-full sm:w-44 mb-3'
                                                data={[
                                                    { value: 'react', label: 'React' },
                                                    { value: 'ng', label: 'Angular' },
                                                    { value: 'svelte', label: 'Svelte' },
                                                    { value: 'vue', label: 'Vue' },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Color"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Odor"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                label="Class #"
                                                placeholder="Pick one"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                                data={[
                                                    { value: 'react', label: 'React' },
                                                    { value: 'ng', label: 'Angular' },
                                                    { value: 'svelte', label: 'Svelte' },
                                                    { value: 'vue', label: 'Vue' },
                                                ]}
                                            />
                                        </div>
                                        <div className="flex items-end mx-auto md:mx-0">
                                            <Button className="bg-[#38576B] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Add Additional State</Button>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="md:flex flex-wrap items-end mt-6">
                                            <div>
                                                <TextInput
                                                    label="Boiling Point"
                                                    placeholder=""
                                                    className='w-full sm:w-44 mb-3'
                                                />
                                            </div>
                                            <div>
                                                <Select
                                                    label=""
                                                    placeholder="°F"
                                                    className='w-full sm:w-20 md:ml-3 mb-3'
                                                    data={[
                                                        { value: 'react', label: 'React' },
                                                        { value: 'ng', label: 'Angular' },
                                                        { value: 'svelte', label: 'Svelte' },
                                                        { value: 'vue', label: 'Vue' },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    label="Molecular Weight"
                                                    placeholder="0 g/mol"
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>

                                            <div>
                                                <TextInput
                                                    label="Solubility"
                                                    placeholder="0 %"
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    label="Flash Point"
                                                    placeholder=""
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>
                                            <div>
                                                <Select
                                                    label=""
                                                    placeholder="°F"
                                                    className='w-full sm:w-20 md:ml-3 mb-3'
                                                    data={[
                                                        { value: 'react', label: 'React' },
                                                        { value: 'ng', label: 'Angular' },
                                                        { value: 'svelte', label: 'Svelte' },
                                                        { value: 'vue', label: 'Vue' },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    label="Vapor Pressure "
                                                    placeholder="0 mm/Hg"
                                                    className='w-full sm:w-44 md:ml-6 mb-3'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-wrap border-b-2 py-6">
                                        <div>
                                            <TextInput
                                                label="Evaporation Rate"
                                                placeholder="0 hrs"
                                                className='w-full sm:w-44 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Vapor Hazard Ratio (VHR)"
                                                placeholder="0"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Vapor Density"
                                                placeholder="0"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Particle Size"
                                                placeholder="0 µm"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Specific Gravity"
                                                placeholder="0 µm"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <p className="font-bold mb-3">
                                            Overall Airborne Exposure Potential = 4
                                        </p>
                                        <div className="md:flex flex-wrap py-6 text-black">
                                            <div className=" w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FF8744] p-4 rounded-t-md ">
                                                    <div className="font-bold ">Rating</div>
                                                    <div className="font-bold">4</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Boiling Point</p>
                                                    <p className="text-gray-500">50 ≤ 150</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FF8744] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">4</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Flash Point</p>
                                                    <p className="text-gray-500">50 ≤ 100 °F</p>
                                                </div>
                                            </div>
                                            <div className=" w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FCAB64] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">3</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Vapor Pressure</p>
                                                    <p className="text-gray-500">10 ≤ 28 mm/Hg</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FCAB64] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">3</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Evaporation Rate</p>
                                                    <p className="text-gray-500">12 to 30 hrs</p>
                                                </div>
                                            </div>
                                            <div className=" w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#57D364] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">1</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">VHR</p>
                                                    <p className="text-gray-500">1 ≤ 25</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/3 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#57D364] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">1</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Particle Size</p>
                                                    <p className="text-gray-500">{'Super Coarse '}</p>
                                                    <p className="text-gray-500">{'(>100 µm, Non-friable solids, Pellets)'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <p className="font-bold mb-3">
                                            Overall Dermal Contact Potential = 5
                                        </p>
                                        <div className="md:flex flex-wrap py-6 text-black">
                                            <div className="rounded-md w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FC6464] p-4 rounded-t-md ">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">5</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Evaporation Rate</p>
                                                    <p className="text-gray-500">{'>50 hrs'}</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FC6464] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">5</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Vapor Pressure</p>
                                                    <p className="text-gray-500">{'< 1 mm/Hg'}</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/3 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FF8744] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">4</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Solubility</p>
                                                    <p className="text-gray-500">{'Very Small (<1 micron in size)'} </p>
                                                    <p className="text-gray-500">{'Semi-Soluble (Some lipid/water solubility)'} </p>
                                                </div>
                                            </div>
                                            <div className=" w-full md:w-60 mb-6 mr-6">
                                                <div className="flex justify-between bg-[#FCAB64] p-4 rounded-t-md">
                                                    <div className="font-bold">Rating</div>
                                                    <div className="font-bold">3</div>
                                                </div>
                                                <div className="p-4 min-h-[7rem] border-2 bg-white rounded-b-md">
                                                    <p className="font-bold">Molecular Weight</p>
                                                    <p className="text-gray-500">100 ≤ 150 g/mol</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <p className="text-sm ">
                            Table Style 02 (Target Organ Effects)
                        </p>
                    </div>
                    <div className="mt-4 border border-[#6B94B3] border-b-8">
                        <div className="flex w-full">
                            <p className="pl-6 py-4 bg-[#6B94B3] text-white w-full">
                                Target Organ Effects (Select All That Apply)
                            </p>
                            <p className="pl-6 py-4 bg-[#6B94B3] text-white w-full border-l-4 border-gray-300">
                                Specific Concern (Select All That Apply)
                            </p>
                        </div>
                        <div className="flex w-full">
                            <div className="p-6 py-4 w-full">
                                <Select
                                    label=""
                                    placeholder="Cardiovascular (Heart and Blood Vessels)"
                                    className=''
                                    data={[
                                        { value: 'react', label: 'React' },
                                        { value: 'ng', label: 'Angular' },
                                        { value: 'svelte', label: 'Svelte' },
                                        { value: 'vue', label: 'Vue' },
                                    ]}
                                />
                            </div>
                            <div className="p-6 py-4 w-full border-l-4 border-gray-300">
                                <Checkbox
                                    label="Argyria"
                                    className="my-4"
                                />
                                <Checkbox
                                    label="Cardiac Impairment"
                                    className="my-4"

                                />
                                <Checkbox
                                    label="Myocardial Effects"
                                    className="my-4"

                                />
                                <Checkbox
                                    label="Vasoconstriction"
                                    className="my-4"

                                />
                                <Checkbox
                                    label="Vasodilation"
                                    className="my-4"

                                />
                                <Checkbox
                                    label="Vascular System Impairment"
                                    className="my-4"

                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <p className="text-sm ">
                            Table Style 03
                        </p>
                    </div>
                    <div className="mt-4 border border-[#6B94B3] border-b-8">
                        <p className="pl-6 py-4 bg-[#6B94B3] text-white">
                            Chemical Health Hazards
                        </p>
                        <div className=" md:px-0 sm:py-6 rounded-md m-6">
                            <div className="">
                                <div className="mt-8">
                                    <div className="md:flex flex-wrap items-end mt-6">
                                        <div>
                                            <TextInput
                                                label="LC50"
                                                placeholder=""
                                                className='w-full sm:w-44 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="LD50 (Oral)"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>

                                        <div>
                                            <TextInput
                                                label="LD50 (Skin)"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="pH"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                label="Carcinogen"
                                                placeholder="Choose"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                                data={[
                                                    { value: 'react', label: 'React' },
                                                    { value: 'ng', label: 'Angular' },
                                                    { value: 'svelte', label: 'Svelte' },
                                                    { value: 'vue', label: 'Vue' },
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                label="Skin Notation"
                                                placeholder="Choose"
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                                data={[
                                                    { value: 'react', label: 'React' },
                                                    { value: 'ng', label: 'Angular' },
                                                    { value: 'svelte', label: 'Svelte' },
                                                    { value: 'vue', label: 'Vue' },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}