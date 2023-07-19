
import React, { useState } from 'react'
export default function SearchBar() {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <form>
                <div className="flex relative">
                    <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        onClick={()=>setToggle(!toggle)}
                        className="flex-shrink-0  z-10 inline-flex items-center py-2 px-3 md:px-6 text-sm font-medium text-center text-gray-900 bg-gray-100 border-r rounded-l-lg hover:bg-gray-200"
                        type="button">
                        All
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-1 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div id="dropdown" className={`z-10 absolute ${toggle ? '' : 'hidden'} top-10 md:top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                            </li>
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2 md:p-4 w-full z-20 text-sm text-gray-900 bg-gray-100 rounded-r-lg focus:outline focus:outline-[#57D364]"
                            placeholder="Type your search here..."
                            required
                        // value={values.subject}
                        // onChange={handleChange}
                        />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#57D364] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg aria-hidden="true" className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
