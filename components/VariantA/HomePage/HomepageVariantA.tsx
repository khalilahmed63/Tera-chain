import { TextInput } from '@mantine/core'
import React from 'react'
import { GiSkullCrossedBones } from "react-icons/gi";
import { RiFileTransferLine, RiFileTextLine } from "react-icons/ri";
import { BsDatabaseAdd } from "react-icons/bs";
import Main from '../Layouts/Main';
import Link from 'next/link';
import PrimaryCard from '../Cards/PrimaryCard';
import SearchBar from '../SearchBar/SearchBar';

export default function HomepageVariantA() {
    return (
        <Main>
            <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">TeraChain - Resource Center</h1>
            <p className="text-center mt-2 tracking-wide">
                The center point for chaining all Task Exposure Risk Assessment (TERA) information <br className="hidden md:block" /> together on a unified network that may be used by all users.
            </p>
            <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto mt-6">
            <SearchBar />
            </div>
            <div className="my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    <div className="flex justify-center items-center">
                        <Link href="/dataLibrary">
                            <PrimaryCard icon={<RiFileTransferLine size={40} />} iconBgColor="bg-[#808EBE]" title="Data library" desc="Storage area for all the tables used to populate the hazard forms from the TERABuilder." />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/hazardInfo">
                            <PrimaryCard icon={<GiSkullCrossedBones size={40} />} iconBgColor="bg-[#FC6464]" title="Hazard Info" desc="Database for the storage of completed hazard forms." />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/references">
                            <PrimaryCard icon={<RiFileTextLine size={40} />} iconBgColor="bg-[#64AAFC]" title="References" desc="Storage area for all the references that are used in TERACHAIN" />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/objectiveDatabase">
                            <PrimaryCard icon={<BsDatabaseAdd size={40} />} iconBgColor="bg-[#FCAB64]" title="Objective Database" desc="A shared  database which allows users to share their TERAs across all industries." />
                        </Link>
                    </div>
                </div>
            </div>
        </Main>
    )
}
