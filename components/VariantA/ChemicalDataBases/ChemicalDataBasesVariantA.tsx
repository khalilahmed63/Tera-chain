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
import { TextInput } from '@mantine/core';
import { FaRadiation } from 'react-icons/fa';

export default function ChemicalDataBasesVariantA() {
    return (
        <Main>
            <div className="relative pb-6">
                <div className="absolute">
                    <Link href="/">
                        <div className="hover:border hover:bg-gray-200 hover:text-black rounded-full p-1">
                            <BiArrowBack size={25} />
                        </div>
                    </Link>
                </div>
                <h1 className="text-center font-bold text-2xl mt-4 md:mt-10">Hazard Info</h1>
                <p className="text-center mt-2 tracking-wide">
                    Database for the storage of completed hazard forms.
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
                    ChemicalDataBasesVariantA
                </div>
            </div>
        </Main>
    )
}
