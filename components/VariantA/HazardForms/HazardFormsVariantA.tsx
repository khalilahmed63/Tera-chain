import React from 'react'
import Main from '../Layouts/Main';
import { BsSun } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CgToolbox } from 'react-icons/cg';
import SecondaryCard from '../Cards/SecondaryCard';
import { GiChemicalDrop, GiHotSurface } from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineWaves } from 'react-icons/md';
import { TbBrain } from 'react-icons/tb';
import { RxSpeakerLoud } from 'react-icons/rx';
import { FaRadiation } from 'react-icons/fa';

export default function HazardFormsVariantA() {
    return (
        <Main>
            <div className="relative">
                <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">Hazard Forms</h1>
                <p className="text-center mt-2 tracking-wide">
                Blank hazard forms that allow users to populate the required hazard information for <br className="hidden md:block" /> standardization. Choose the right form for you below. 
                </p>
                <div className="mx-auto my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        <div className="flex justify-center items-center">
                        <SecondaryCard icon={<GiChemicalDrop size={40} />} iconBgColor="bg-[#808EBE]" title="Chemical" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<HiOutlineUserGroup size={40}  />} iconBgColor="bg-[#808EBE]" title="Substances" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<RxSpeakerLoud size={40}  />} iconBgColor="bg-[#808EBE]" title="Noise Sources" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<GiHotSurface size={40}  />} iconBgColor="bg-[#808EBE]" title="Thermal Stress Sources" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<CgToolbox size={40}  />} iconBgColor="bg-[#808EBE]" title="Biological Agents" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<AiOutlineStar size={40}  />} iconBgColor="bg-[#808EBE]" title="Ergonomic Stressors" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<FaRadiation size={40}  />} iconBgColor="bg-[#808EBE]" title="Radiation Sources" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsSun size={40}  />} iconBgColor="bg-[#808EBE]" title="Illumination Sources" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<TbBrain size={40}  />} iconBgColor="bg-[#808EBE]" title="Psychological" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<MdOutlineWaves size={40}  />} iconBgColor="bg-[#808EBE]" title="Vibration" />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
