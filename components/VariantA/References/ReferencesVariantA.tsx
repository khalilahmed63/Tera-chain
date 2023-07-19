import React from 'react'
import Main from '../Layouts/Main';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';
import SecondaryCard from '../Cards/SecondaryCard';
import { TextInput } from '@mantine/core';
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { CgToolbox } from 'react-icons/cg';

export default function ReferencesVariantA() {
    return (
        <Main>
            <div className="relative pb-6">
                <div className="absolute">
                    <Link href="/">
                        <div className=" hover:bg-gray-200 hover:text-black rounded-full p-1">
                            <BiArrowBack size={25} />
                        </div>
                    </Link>
                </div>
                <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">References</h1>
                <p className="text-center mt-2 tracking-wide">
                Storage area for all the references that are used in TERACHAIN
                </p>
                <div className="w-full md:w-[30%] mx-auto">
                    <TextInput
                        className="mt-4"
                        placeholder="Type your search here..."
                        name="subject"
                        variant="filled"
                        size="md"
                        required
                    // value={values.subject}
                    // onChange={handleChange}
                    />
                </div>
                <div className="mx-auto my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<HiOutlineNewspaper size={40} />} iconBgColor="bg-[#64AAFC]" title="SDS Repository" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsFillPatchCheckFill size={40} />} iconBgColor="bg-[#64AAFC]" title="Regulations & Standards" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<RiSurgicalMaskLine size={40} />} iconBgColor="bg-[#64AAFC]" title="PPE Specifications" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<CgToolbox size={40} />} iconBgColor="bg-[#64AAFC]" title="Equipment Specifications" />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
