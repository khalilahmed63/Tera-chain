import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className="bg-[#6B94B3] p-5 md:px-10 flex items-center text-white">
            <div className="md:flex text-center">
                <p>
                    © Copyright 2021 TERACHAIN. All Rights Reserved.
                </p>
                <div className="flex justify-center">
                    <p className="pl-2 hover:text-gray-300 hover:underline">
                        <Link href="#">
                            Privacy Policy
                        </Link>
                    </p>
                    <p className="px-2">
                        |
                    </p>
                    <p className="hover:text-gray-300 hover:underline">
                        <Link href="#">
                            Terms & Conditions.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
