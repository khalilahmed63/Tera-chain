import React from 'react'
import Main from '../Layouts/Main';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import { BsFillPatchCheckFill, BsSun } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';
import SecondaryCard from '../Cards/SecondaryCard';
import { TextInput } from '@mantine/core';
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { CgToolbox } from 'react-icons/cg';
import { GiChemicalDrop, GiHotSurface } from 'react-icons/gi';
import { RxSpeakerLoud } from 'react-icons/rx';
import { AiOutlineStar } from 'react-icons/ai';
import { FaRadiation } from 'react-icons/fa';
import { TbBrain } from 'react-icons/tb';
import { MdOutlineWaves } from 'react-icons/md';

export default function ObjectiveDatabaseVariantA() {
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
                <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">Objective Database</h1>
                <p className="text-center mt-2 tracking-wide">
                A shared objective database which allows users to share their TERAs across all <br className="hidden md:block" /> industries. User specific details are scrubbed from a TERA to ensure confidentiality.
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
                            <SecondaryCard icon={<GiChemicalDrop size={40} />} iconBgColor="bg-[#64AAFC]" title="Chemical" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<RxSpeakerLoud size={40} />} iconBgColor="bg-[#64AAFC]" title="Noise" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<GiHotSurface size={40} />} iconBgColor="bg-[#64AAFC]" title="Thermal Stress" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<CgToolbox size={40} />} iconBgColor="bg-[#64AAFC]" title="Biological" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<AiOutlineStar size={40} />} iconBgColor="bg-[#64AAFC]" title="Ergonomic/ Vibration" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<FaRadiation size={40} />} iconBgColor="bg-[#64AAFC]" title="Radiation Sources" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsSun size={40} />} iconBgColor="bg-[#64AAFC]" title="Illumination Sources" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<TbBrain size={40} />} iconBgColor="bg-[#64AAFC]" title="Psychological" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<MdOutlineWaves size={40} />} iconBgColor="bg-[#64AAFC]" title="Vibration" />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
