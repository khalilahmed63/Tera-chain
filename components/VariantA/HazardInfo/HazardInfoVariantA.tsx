import React from 'react'
import Main from '../Layouts/Main';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import { BsSun } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import SecondaryCard from '../Cards/SecondaryCard';
import { GiChemicalDrop, GiHotSurface } from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineHand } from 'react-icons/hi';
import { RxSpeakerLoud } from 'react-icons/rx';
import { FaRadiation } from 'react-icons/fa';
import SearchBar from '../SearchBar/SearchBar';

export default function HazardInfoVariantA() {
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
                <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">Hazard Info</h1>
                <p className="text-center mt-2 tracking-wide">
                    Database for the storage of completed hazard forms.
                </p>
                <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto mt-6">
                    <SearchBar />
                </div>
                <div className="mx-auto my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<GiChemicalDrop size={40} />} iconBgColor="bg-[#FC6464]" title="Chemicals" link="/hazardInfo/Chemical-databases" form="/hazardInfo/Chemical-databases" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<HiOutlineUserGroup size={40} />} iconBgColor="bg-[#FC6464]" title="Substance" link="/hazardInfo/Substances-databases" form="/substance" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<RxSpeakerLoud size={40} />} disable iconBgColor="bg-[#FC6464]" title="Noise Sources" form="#" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<GiHotSurface size={40} />} disable iconBgColor="bg-[#FC6464]" title="Thermal Stress Sources" form="#" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<HiOutlineHand size={40} />} disable iconBgColor="bg-[#FC6464]" title="Biological Agents" form="#" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<AiOutlineStar size={40} />} disable iconBgColor="bg-[#FC6464]" title="Ergonomic Stressors" form="#" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<FaRadiation size={40} />} disable iconBgColor="bg-[#FC6464]" title="Radiation Sources" form="#" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsSun size={40} />} disable iconBgColor="bg-[#FC6464]" title="Illumination Sources" form="#" />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
