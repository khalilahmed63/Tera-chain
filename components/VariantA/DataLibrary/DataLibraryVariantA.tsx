import React from 'react'
import Main from '../Layouts/Main';
import { BiArrowBack, BiCoinStack } from 'react-icons/bi';
import Link from 'next/link';
import { BsDatabaseAdd, BsExclamationTriangle, BsLungs, BsMotherboard } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CgNotes } from 'react-icons/cg';
import SecondaryCard from '../Cards/SecondaryCard';
import { GiChemicalDrop, GiEyeTarget, GiGloves } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineHand } from 'react-icons/hi';
import { CiMedicalCross } from 'react-icons/ci';
import { MdOutlineAir } from 'react-icons/md';
import { TbAdjustmentsHorizontal, TbSwipe } from 'react-icons/tb';
import { RiSurgicalMaskLine } from 'react-icons/ri';

export default function DataLibraryVariantA() {
    return (
        <Main>
            <div className="relative">
                <div className="absolute">
                    <Link href="/">
                        <div className=" hover:bg-gray-200 hover:text-black rounded-full p-1">
                            <BiArrowBack size={25} />
                        </div>
                    </Link>
                </div>
                <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">Data Library</h1>
                <p className="text-center mt-2 tracking-wide">
                    Storage area for all the DATA Tables that are used to populate the hazard forms and <br className="hidden md:block" /> while using the TERABuilder.
                </p>
                <div className="mx-auto my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<CgNotes size={40}  />} iconBgColor="bg-[#808EBE]" title="Task Classifications" form="/dataLibrary/Task-Classifications" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<HiOutlineUserGroup size={40}  />} iconBgColor="bg-[#808EBE]" title="Similar Exposure Groups(SEGs)" form="/dataLibrary/Similar-Exposure-Groups(SEGs)" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsExclamationTriangle size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Health Hazards" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<AiOutlineHeart size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Target Organs" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<HiOutlineHand size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Exposure Limits" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsMotherboard size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Direct Reading Instruments" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<GiEyeTarget size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Biological Exposure Indices (BEI) Monitoring" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<CiMedicalCross size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Medical & Emergency Response" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<MdOutlineAir size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Air Sampling Methods" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BiCoinStack size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Bulk Sampling Methods" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<TbSwipe size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Wipe Sampling Methods" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<RiSurgicalMaskLine size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Respiratory Protection" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsLungs size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Respiratory Cartridges" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<BsDatabaseAdd size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Clothing" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<GiGloves size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Gloves" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<GiChemicalDrop size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Work Conditions" form="/dataLibrary/" />
                        </div>
                        <div className="flex justify-center items-center">
                            <SecondaryCard icon={<TbAdjustmentsHorizontal size={40}  />} iconBgColor="bg-[#808EBE]" title="Chemical Controls" form="/dataLibrary/" />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
