import React, { useEffect, useState } from 'react'
import Main from '../Layouts/Main';
import { Button, Card, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import dayjs from 'dayjs';

export default function TeraBuilderVariantA() {
    const [toggle, setToggle] = useState(false);
    const [newForm, setNewForm] = useState('');
    const [searchValue, onSearchChange] = useState('');
    const task = 'task' + Math.floor(Math.random() * 100000);
    const casNo = 'cas' + Math.floor(Math.random() * 100000);
    const uniqueId = Math.floor(Math.random() * 1000000);

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
    const checkHandler = (e: any) => {
        // console.log(e.target.value,);
        setNewForm(e.target.value)
    };
    useEffect(() => {
        console.log(newForm);
    }, [newForm])


    return (
        <Main>
            <div className="relative">
                <div className="my-10">
                    <p className="text-3xl font-bold">
                        TERABuilder
                    </p>
                    <div className="mt-6 flex items-center">
                        <p className="text-md font-bold">
                            Is this a new task?
                        </p>
                        <div className="ml-6 flex items-center">
                            <input
                                id="yes"
                                type="radio"
                                value="yes"
                                name="new_task"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                onChange={checkHandler}
                            />
                            <label htmlFor="yes" className="ml-2 text-sm font-medium ">Yes</label>
                        </div>
                        <div className="ml-6 flex items-center">
                            <input
                                id="no"
                                type="radio"
                                value="no"
                                name="new_task"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                onChange={checkHandler}
                            />
                            <label htmlFor="no" className="ml-2 text-sm font-medium ">No</label>
                        </div>
                    </div>
                    {/* <div className="mt-6 w-full md:w-[40%]">
                        <form className="flex items-center">
                            <div className="relative w-full">
                                <input type="text" disabled={newForm === 'yes' ? true : false} id="simple-search" className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:outline focus:outline-[#57D364] focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Search by chemical/substance name" required />
                            </div>
                            <button type="submit" disabled={newForm === 'yes' ? true : false} className={`p-2.5 -ml-10 z-10 text-sm font-medium text-white ${newForm === 'yes' ? 'bg-[#8cd693]' : 'bg-[#57D364]'} rounded-lg focus:ring-4 focus:outline focus:ring-blue-300`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div> */}
                    <div className="mt-6">
                        <div className="flex items-center">
                            <Select
                                label=""
                                placeholder="Search by chemical/substance name"
                                className="w-96"
                                radius="md"
                                searchable
                                disabled={newForm === 'yes' ? true : false}
                                onSearchChange={onSearchChange}
                                searchValue={searchValue}
                                nothingFound="No options"
                                data={[
                                    { value: 'chemical01', label: 'chemical01' },
                                    { value: 'chemical02', label: 'chemical02' },
                                    { value: 'chemical03', label: 'chemical03' },
                                    { value: 'chemical04', label: 'chemical04' },
                                    { value: 'chemical05', label: 'chemical05' },
                                    { value: 'substance01', label: 'substance01' },
                                    { value: 'substance02', label: 'substance02' },
                                    { value: 'substance03', label: 'substance03' },
                                    { value: 'substance04', label: 'substance04' },
                                    { value: 'substance05', label: 'substance05' },
                                ]}
                            />
                            <button type="submit" disabled={newForm === 'yes' ? true : false} className={`p-2 -ml-10 z-10 text-sm font-medium text-white ${newForm === 'yes' ? 'bg-[#8cd693]' : 'bg-[#57D364]'} rounded-lg focus:ring-4 focus:outline focus:ring-blue-300`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Task Title?
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                            })}
                            p="lg"
                            className="mt-2 md:px-0 sm:py-6 mb-6 rounded-md"
                        >
                            <div >
                                <form>
                                    <div className="md:flex flex-wrap">
                                        <div>
                                            <TextInput
                                                // withAsterisk
                                                label="Task Name or Number"
                                                placeholder=""
                                                value={`${task}`}
                                                className='w-full sm:w-72 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                label="Chemical Name/Number or CAS#"
                                                placeholder=""
                                                value={`${casNo}`}
                                                className='w-full sm:w-72 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                label="Scale of Work"
                                                placeholder="Pick one"
                                                className='w-full sm:w-72 md:ml-6 mb-3'
                                                data={[
                                                    { value: '1', label: '1' },
                                                    { value: '2', label: '2' },
                                                    { value: '3', label: '3' },
                                                    { value: '4', label: '4' },
                                                    { value: '5', label: '5' },
                                                ]}
                                            />
                                        </div>
                                        <div>

                                            <TextInput
                                                label="Unique Number"
                                                placeholder=""
                                                value={`${uniqueId}`}
                                                className='w-full sm:w-72 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div className="flex items-end mx-auto md:mx-0">
                                            <Button className="bg-[#5781A4] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Generate Title</Button>
                                        </div>
                                    </div>
                                    <div className="sm:flex mt-8">
                                        <div className="">
                                            <DateInput
                                                minDate={new Date()}
                                                maxDate={dayjs(new Date()).add(1, 'month').toDate()}
                                                label="Date"
                                                placeholder="00/00/0000"
                                                maw={400}
                                                mx="auto"
                                                className='w-full sm:w-32 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div className="">
                                            <Select
                                                label="Similar Exposure Group"
                                                placeholder="Choose"
                                                className='w-full sm:w-72 md:ml-6 mb-3'
                                                data={[
                                                    { value: '47-2140', label: '47-2140 Painters and Paperhangers' },
                                                    { value: '47-2141 Painters', label: '47-2141 Painters' },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            User Details
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                            })}
                            p="lg"
                            className="mt-2 md:px-0 sm:py-6 rounded-md"
                        >
                            <div>
                                <div className="sm:flex flex-wrap items-end">
                                    <div>
                                        <TextInput
                                            // withAsterisk
                                            label="Company Name"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                        />
                                    </div>
                                    <div>
                                        <Select
                                            label="Employee ID Number"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
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
                                            label="Conducted By"
                                            placeholder="First Name"
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            label=""
                                            placeholder="Middle Name"
                                            className='w-full sm:w-32 md:ml-6 mb-3 lg:mb-0 mt-3'
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            label=""
                                            placeholder="Last Name"
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0 mt-3'
                                        />
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <Select
                                            label="Job Title"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                            data={[
                                                { value: 'Bridge Painter', label: 'Bridge Painter' },
                                                { value: 'House Painter ', label: 'House Painter ' },
                                                { value: 'Traffic Line Painter', label: 'Traffic Line Painter' },
                                            ]}
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            label="Job Title (other)"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                        />
                                    </div>
                                    <div>
                                        <Select
                                            label="Certification"
                                            placeholder="Choose"
                                            className='w-full sm:w-32 md:ml-6 mb-3 lg:mb-0'
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
                                            label="Certification Number"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                        />
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div className="">
                                        <Select
                                            label="Department"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="">
                                        <Select
                                            label="Section"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="">
                                        <Select
                                            label="Location"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div> <div className="">
                                        <Select
                                            label="Building"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
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
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Task Classification
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                            })}
                            p="lg"
                            className="mt-2 md:px-0 sm:py-6 rounded-md"
                        >
                            <div>
                                <div className="sm:flex flex-wrap items-end">
                                    <div>
                                        <Select
                                            label="Task Type"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                            data={[
                                                { value: '0800 – Application', label: '0800 – Application' },
                                                { value: '0801 – Painting', label: '0801 – Painting' },
                                                { value: '0802 – Coating ', label: '0802 – Coating ' },
                                                { value: '0803 – Applying', label: '0803 – Applying' },
                                                { value: '0804 – Spraying (5)', label: '0804 – Spraying (5)' },
                                                { value: '0805 – Galvanizing (4)', label: '0805 – Galvanizing (4) ' },
                                                { value: '0806 – Electroplating (4)', label: '0806 – Electroplating (4)' },
                                                { value: '0807 – Rolling (3)', label: '0807 – Rolling (3) ' },
                                                { value: '0808 – Brushing (2)', label: '0808 – Brushing (2)' },
                                                { value: '0809 – Caulking (2)', label: '0809 – Caulking (2) ' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-gray-500 hover:!bg-gray-400 md:ml-6 mb-3">Task Airborne Potential:</Button></div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-gray-500 hover:!bg-gray-400 md:ml-6 mb-3">Task Dermal Potential:</Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <Select
                                            label="Days Per Year"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-gray-500 hover:!bg-gray-400 md:ml-6 mb-3">Rating: </Button></div>
                                    <div>
                                        <Select
                                            label="Hours Per Day/Week"
                                            placeholder=""
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-gray-500 hover:!bg-gray-400 md:ml-6 mb-3">Rating: </Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div className="">
                                        <Select
                                            label="Equipment Type"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
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
                                            label="Serial Number"
                                            placeholder="First Name"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div className="">
                                        <Select
                                            label="Operating Parameters (RPM, PSI)"
                                            placeholder="Choose"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#38576B] hover:!bg-gray-500 md:ml-6 mb-3">Add</Button></div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Hazard Information
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                            })}
                            p="lg"
                            className="mt-2 md:px-0 sm:py-6 rounded-md"
                        >
                            <div >
                                <div className="sm:flex flex-wrap items-end">
                                    <div>
                                        <Select
                                            label="Hazard"
                                            placeholder="Chemical"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex relative md:ml-6 mb-3">
                                        <button
                                            id="dropdown-button"
                                            data-dropdown-toggle="dropdown"
                                            onClick={() => setToggle(!toggle)}
                                            className="flex-shrink-0 overflow-hidden z-10 inline-flex items-center px-3 md:px-6 text-sm font-medium text-center text-gray-900 bg-white border-r rounded-l-lg hover:bg-gray-200"
                                            type="button">
                                            Chemical Name
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
                                        <div className="relative">
                                            <input
                                                type="search"
                                                id="search-dropdown"
                                                className="block w-full sm:w-48 md:w-80 p-2 z-20 text-sm text-gray-900 bg-white rounded-r-lg focus:outline focus:outline-[#57D364]"
                                                placeholder="Type your search here..."
                                                required
                                            // value={values.subject}
                                            // onChange={handleChange}
                                            />
                                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#38576B] hover:!bg-gray-400 md:ml-6 mb-3">Complete Chemical Form </Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <TextInput
                                            label="Chemical Name"
                                            placeholder="EM302"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Airborne Exposure Potential: 5</Button></div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Dermal Contact Potential: 5</Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <TextInput
                                            label="Chemical ID"
                                            placeholder="5687911"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#ECC94E] text-black hover:!bg-gray-400 md:ml-6 mb-3">Health Hazard: CMR 2</Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <TextInput
                                            label="Physical State"
                                            placeholder="Gas"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Inhalation Exposure Limit Rating: 5</Button></div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Dermal Exposure Limit Rating: 5</Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <Select
                                            label="Product Use"
                                            placeholder="Corrosion Inhibitor"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <TextInput
                                            label="Substance"
                                            placeholder="Benzene"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Airborne Exposure Potential: 5</Button></div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Dermal Contact Potential: 5</Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <TextInput
                                            label="CAS #"
                                            placeholder="71-43-2"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#ECC94E] text-black hover:!bg-gray-400 md:ml-6 mb-3">Health Hazard: CMR 2</Button></div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-8">
                                    <div>
                                        <Select
                                            label="Physical State"
                                            placeholder="Gas"
                                            className='w-full sm:w-72 md:ml-6 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Inhalation Exposure Limit Rating: 5</Button></div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Dermal Exposure Limit Rating: 5</Button></div>
                                </div>
                                <div className="mt-8">
                                    <p className="text-lg font-bold md:ml-6">
                                        Scale of Use
                                    </p>
                                    <div className="md:flex flex-wrap items-end mt-6">
                                        <div>
                                            <TextInput
                                                label="State"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                label="Weight"
                                                placeholder=""
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
                                                label=""
                                                placeholder="lbs"
                                                className='w-full sm:w-20 md:ml-6 mb-3'
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
                                                label="Area"
                                                placeholder=""
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
                                                label=""
                                                placeholder="ft2"
                                                className='w-full sm:w-20 md:ml-6 mb-3'
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
                                                label="Length"
                                                placeholder=""
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
                                                label=""
                                                placeholder="ft"
                                                className='w-full sm:w-20 md:ml-6 mb-3'
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
                                                label="# Welding Rods Per day"
                                                placeholder=""
                                                className='w-full sm:w-44 md:ml-6 mb-3'
                                                data={[
                                                    { value: 'react', label: 'React' },
                                                    { value: 'ng', label: 'Angular' },
                                                    { value: 'svelte', label: 'Svelte' },
                                                    { value: 'vue', label: 'Vue' },
                                                ]}
                                            />
                                        </div>
                                        <div className="flex items-end mx-auto md:mx-0 mt-4">
                                            <Button className="bg-[#38576B] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Add New Hazard</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Chemical Work Conditions
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                            })}
                            p="lg"
                            className="mt-2 md:px-0 sm:py-6 rounded-md"
                        >
                            <div>
                                <p className="text-lg font-bold md:ml-6">
                                    Environmental
                                </p>
                                <div className="sm:flex flex-wrap items-end mt-4">
                                    <div>
                                        <TextInput
                                            // withAsterisk
                                            label="Ambient Temperature"
                                            placeholder=""
                                            className='w-full sm:w-36 md:ml-6 mb-3 lg:mb-0'
                                        />
                                    </div>
                                    <div>
                                        <Select
                                            label=""
                                            placeholder="°F"
                                            className='w-full sm:w-20 md:ml-2 mb-3 lg:mb-0'
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
                                            label="Humidity"
                                            placeholder="%"
                                            className='w-full sm:w-36 md:ml-6 mb-3 lg:mb-0'
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            label="Operating Temperature"
                                            placeholder=""
                                            className='w-full sm:w-36 md:ml-6 mb-3 lg:mb-0'
                                        />
                                    </div>
                                    <div>
                                        <Select
                                            label=""
                                            placeholder="°F"
                                            className='w-full sm:w-20 md:ml-2 mb-3 lg:mb-0'
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
                                            label="Atmospheric Pressure"
                                            placeholder="mm/Hg"
                                            className='w-full sm:w-36 md:ml-6 mb-3 lg:mb-0 mt-3'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Workspace
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                            })}
                            p="lg"
                            className="mt-2 md:px-0 sm:py-6 rounded-md"
                        >
                            <div>
                                <div className="sm:flex flex-wrap items-end">
                                    <div>
                                        <Select
                                            label="Workspace Type"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3 lg:mb-0'
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
                                            label="Work Position"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3 lg:mb-0'
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
                                            label="Worker Position"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3 lg:mb-0'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <p className="text-lg font-bold md:ml-6 mt-6">
                                    Confined Space
                                </p>
                                <div className="sm:flex flex-wrap items-end">
                                    <div>
                                        <Select
                                            label="Space"
                                            placeholder=""
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
                                            label="Space Volume"
                                            placeholder=""
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
                                            label=""
                                            placeholder="ft"
                                            className='w-full sm:w-20 md:ml-2 mb-3'
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
                                            label="Identification #"
                                            placeholder=""
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
                                            label="Distance from Source"
                                            placeholder=""
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
                                            label=""
                                            placeholder="ft"
                                            className='w-full sm:w-20 md:ml-2 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start"><Button className="bg-[#FC6464] hover:!bg-gray-400 md:ml-6 mb-3">Rating: 5</Button></div>
                                </div>
                                <div className="">
                                    <div className="md:ml-6 mt-6  md:flex items-center">
                                        <p className="text-md mb-2 md:mb-0 text-center md:text-left font-bold">
                                            Is there an existing mechanical ventilation?
                                        </p>
                                        <div className="flex justify-center items-center">
                                            <div className="md:ml-6 flex items-center">
                                                <input id="yes" type="radio" value="yes" name="new_task" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                <label htmlFor="yes" className="ml-2 text-sm font-medium ">Yes</label>
                                            </div>
                                            <div className="ml-6 flex items-center">
                                                <input id="no" type="radio" value="no" name="new_task" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                <label htmlFor="no" className="ml-2 text-sm font-medium ">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap items-start mt-6">
                                    <div>
                                        <Select
                                            label="Ventilation Flowrate In"
                                            placeholder=""
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
                                            label=""
                                            placeholder="ft"
                                            className='w-full sm:w-20 md:ml-2 mb-3 mt-6'
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
                                            label="Air Changes/Hour (ACH)"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                        <p className="text-xs text-gray-500">
                                            Formula: 60 * (Ventilation In) ÷ Space Volume
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="md:ml-6 mt-6  md:flex items-center">
                                        <p className="text-md mb-2 md:mb-0 text-center md:text-left font-bold">
                                            Is there an existing local exhaust ventilation system?
                                        </p>
                                        <div className="flex justify-center items-center">
                                            <div className="md:ml-6 flex items-center">
                                                <input id="yes" type="radio" value="yes" name="new_task" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                <label htmlFor="yes" className="ml-2 text-sm font-medium ">Yes</label>
                                            </div>
                                            <div className="ml-6 flex items-center">
                                                <input id="no" type="radio" value="no" name="new_task" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                <label htmlFor="no" className="ml-2 text-sm font-medium ">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap items-start mt-6">
                                    <div>
                                        <Select
                                            label="Type"
                                            placeholder=""
                                            className='w-full sm:w-36 md:ml-6 mb-3'
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
                                            label="Face Velocity"
                                            placeholder=""
                                            className='w-full sm:w-36 md:ml-6 mb-3'
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
                                            label=""
                                            placeholder="fpm"
                                            className='w-full sm:w-20 md:ml-2 mb-3 mt-6'
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
                                            label="Identification #"
                                            placeholder=""
                                            className='w-full sm:w-36 md:ml-6 mb-3'
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
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Degree of Dermal Contact
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                            })}
                            p="lg"
                            className="mt-2 md:px-0 sm:py-6 rounded-md"
                        >
                            <div>
                                <div>
                                    <Select
                                        label="type"
                                        placeholder="Open Contact (Unshielded)"
                                        className='w-full sm:w-72 md:ml-6 mb-3 lg:mb-0'
                                        data={[
                                            { value: 'react', label: 'React' },
                                            { value: 'ng', label: 'Angular' },
                                            { value: 'svelte', label: 'Svelte' },
                                            { value: 'vue', label: 'Vue' },
                                        ]}
                                    />
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-4">
                                    <div>
                                        <Select
                                            label="Body Contact Area"
                                            placeholder="Whole Body (Skin Area > 50%) and Hands"
                                            className='w-full md:w-80 md:ml-6 mb-3 '
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex items-end mx-auto md:mx-0 mt-4">
                                        <Button className="bg-[#FF8744] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Rating: 4</Button>
                                    </div>
                                    <div>
                                        <Select
                                            label="Frequency of Contact"
                                            placeholder="Frequent Direct Contact (11-30 times/day or 25 – 50% of day)"
                                            className='w-full md:w-96 md:ml-6 mb-3 '
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex items-end mx-auto md:mx-0 mt-4">
                                        <Button className="bg-[#FC6464] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Rating: 5</Button>
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-4">
                                    <div>
                                        <Select
                                            label="Limited Contact (Temporary Use by Worker)"
                                            placeholder="Extension Tool "
                                            className='w-full md:w-72 md:ml-6 mb-3 '
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex items-end mx-auto md:mx-0 mt-4">
                                        <Button className="bg-[#FF8744] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Rating: 3</Button>
                                    </div>
                                    <div>
                                        <Select
                                            label="No Contact (Engineered System)"
                                            placeholder="Full Cabinet Enclosure"
                                            className='w-full md:w-72 md:ml-6 mb-3 '
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                    <div className="flex items-end mx-auto md:mx-0 mt-4">
                                        <Button className="bg-[#57D364] hover:!bg-[#57D364] mx-auto md:ml-6 mt-4 md:mt-0 mb-3">Rating: 1</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Inhalation Exposure Potential
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
                                <div className="">
                                    <div className="mb-3 flex justify-between w-full overflow-auto">
                                        <div className="w-[85%] min-w-[40rem] p-6">
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Inhalation Health Hazard
                                                        </p>
                                                        <p>5</p>
                                                    </div>
                                                    <div className="p-3 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Inhalation Exposure Limit Rating
                                                        </p>
                                                        <p>3</p>
                                                    </div>
                                                </div>
                                                <div className="mx-4 rounded-md flex justify-center items-center bg-[#FC6464] w-[15%]">5</div>
                                            </div>
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Task Airborne Potential
                                                        </p>
                                                        <p>5</p>
                                                    </div>
                                                    <div className="p-3 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Airborne Exposure Potential
                                                        </p>
                                                        <p>3</p>
                                                    </div>
                                                </div>
                                                <div className="mx-4 rounded-md flex justify-center items-center bg-[#FC6464] w-[15%]">5</div>
                                            </div>
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md bg-white">
                                                        <p className="font-bold ">
                                                            Time
                                                        </p>
                                                        <div className="py-2 px-3 mb-1 rounded-md flex justify-between bg-gray-100">
                                                            <p className="">
                                                                Frequency
                                                            </p>
                                                            <p>5</p>
                                                        </div>
                                                        <div className="py-2 px-3 rounded-md flex justify-between bg-gray-100">
                                                            <p className="">
                                                                Duration
                                                            </p>
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mx-4 rounded-md flex justify-center items-center bg-[#FF8744] w-[15%]">4.5</div>
                                            </div>
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Scale of Use
                                                        </p>
                                                        <p>2</p>
                                                    </div>
                                                    <div className="p-3 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Workspace
                                                        </p>
                                                        <p>4</p>
                                                    </div>
                                                </div>
                                                <div className="mx-4 w-[15%]">
                                                    <div className=" mb-1 p-3 rounded-md flex justify-center items-center bg-[#ECC94E]">2</div>
                                                    <div className=" p-3 rounded-md flex justify-center items-center bg-[#FF8744]">4</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 mb-3 rounded-md flex justify-center items-center bg-white w-[15%]">15.5</div>
                                    </div>
                                    <div className="p-6 mb-1 rounded-md bg-white">
                                        <p className="font-bold ">
                                            Controls
                                        </p>
                                        <div className="w-full md:flex">
                                            <div className="w-full md:w-[85%]">
                                                <div className="md:flex">
                                                    <div className="w-full py-2 px-3 mb-1 rounded-md flex justify-between bg-gray-100">
                                                        <p>Existing Inhalation Controls</p>
                                                        <p>-5</p>
                                                    </div>
                                                    <div className="w-full md:w-[15%] md:mx-4 px-3 py-2 mb-1 rounded-md flex justify-center bg-gray-100">
                                                        <p className="">

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-[15%] py-2 px-3 mb-1 rounded-md flex justify-center bg-gray-100">
                                                <p>-10</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 w-full md:flex">
                                            <div className="w-full md:w-[85%]">
                                                <div className="md:flex">
                                                    <div className="w-full py-2 px-3 mb-1 rounded-md flex justify-between bg-gray-100">
                                                        <p>Additional Inhalation Controls</p>
                                                        <p>-5</p>
                                                    </div>
                                                    <div className="w-full md:w-[15%] md:mx-4 px-3 py-2 mb-1 rounded-md flex justify-center bg-gray-100">
                                                        <p className="">

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-[15%] py-2 px-3 mb-1 rounded-md flex justify-center bg-gray-100">
                                                <p>-5</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 mt-3 w-full md:flex">
                                        <div className="w-full md:w-[85%]">
                                            <div className="md:flex">
                                                <div className="w-full py-2 px-3 mb-1 rounded-md flex justify-between bg-white">
                                                    <p className="font-bold">Overall Score</p>
                                                </div>
                                                <div className="w-full md:w-[15%] md:mx-4 px-3 py-2 mb-1 rounded-md flex justify-center bg-white">
                                                    <p className="">

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[15%] py-2 px-3 mb-1 rounded-md flex justify-center bg-white">
                                            <p>0.5</p>
                                        </div>
                                    </div>
                                    <div className="p-6 mt-8 w-full">``
                                        <p className="text-lg font-bold">
                                            Modeled Air Exposure Results
                                        </p>
                                        <div className="w-full">
                                            <div className="flex flex-wrap">
                                                <div className="w-full md:!w-72 py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-sm py-1 px-3 w-full rounded-md">
                                                        Substance
                                                    </p>
                                                    <p className="bg-white p-3 w-full rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-72  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-sm py-1 px-3 w-full rounded-md">
                                                        CAS#
                                                    </p>
                                                    <p className="bg-white p-3 w-full rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-20  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        %
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-80  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        Calculated Airborne (CA) Concentration
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-28  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        OEL
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-28  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        % of OEL
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-28  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        APF Required
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm">
                                            Formula Used: CA = Evaporation Rate X 24.45 x 10^6 / MW x Q
                                        </p>
                                    </div>
                                    <div className="p-6 mt-8 w-full">
                                        <p className="text-lg font-bold">
                                            Objective Air Exposure Results
                                        </p>
                                        <div className="w-full">
                                            <div className="flex flex-wrap">
                                                <div className="w-full md:!w-72 py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-sm py-1 px-3 w-full rounded-md">
                                                        Substance
                                                    </p>
                                                    <p className="bg-white p-3 w-full rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-72  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-sm py-1 px-3 w-full rounded-md">
                                                        CAS#
                                                    </p>
                                                    <p className="bg-white p-3 w-full rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-20  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        %
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-80  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        Calculated Airborne (CA) Concentration
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-28  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        OEL
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-28  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        % of OEL
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="w-full md:!w-28  py-2 mb-1 mr-2 rounded-md flex flex-col items-center">
                                                    <p className="bg-[#507A9B] text-white text-center text-sm py-1 px-3 w-full rounded-md">
                                                        APF Required
                                                    </p>
                                                    <p className="bg-white p-3 w-full text-center rounded-md">
                                                        1
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Additional Inhalation Controls
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'black' : 'black',
                            })}
                            p="lg"
                            className="mt-2 sm:py-6 rounded-md"
                        >
                            <div className="">
                                <div className="sm:flex flex-wrap items-end mt-4">
                                    <div>
                                        <Select
                                            label="Engineering Controls"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3 lg:mb-0'
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
                                            label="Admistrative Controls"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3 lg:mb-0'
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
                                            label="Respiratory Protection"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3 lg:mb-0'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="overflow-auto">
                                    <div className="mt-2 md:m-6 md:px-0 sm:py-6  rounded-md min-w-[60rem]">
                                        <p className="text-lg font-bold mb-2">
                                            Recommended Respitory Protection
                                        </p>
                                        <table >
                                            <thead>
                                                <tr>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'> Substance</p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>CAS# </p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Respiratory Protection </p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Assigned Protection Factor </p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>MUC (ppm) </p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>MUC (mg/m3) </p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={3}><p className='bg-white h-40 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td rowSpan={3}><p className='bg-white h-40 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> Qtr Mask</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> H/H-PAPR</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> 25</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> HF-SAR-CF/PD</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> 50</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="sm:flex flex-wrap items-end mt-4">
                                    <div>
                                        <Select
                                            label="Work Rate"
                                            placeholder=""
                                            className='w-full sm:w-44 md:ml-6 mb-3 lg:mb-0'
                                            data={[
                                                { value: 'react', label: 'React' },
                                                { value: 'ng', label: 'Angular' },
                                                { value: 'svelte', label: 'Svelte' },
                                                { value: 'vue', label: 'Vue' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="overflow-auto">
                                    <div className="mt-2 md:m-6 md:px-0 sm:py-6 rounded-md overflow-auto min-w-[60rem]">
                                        <p className="text-lg font-bold mb-2">
                                            Recommended Respiratory Cartridges
                                        </p>
                                        <table >
                                            <thead>
                                                <tr>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'> Substance</p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>CAS# </p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Respiratory Cartridges</p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Expected Concentration</p></th>
                                                    <th className="w-72"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Breakthrough Time (mins)</p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={3}><p className='bg-white h-40 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td rowSpan={3}><p className='bg-white h-40 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'>AM/MA</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'>FM/OV</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'>N95</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'></p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> </p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Dermal Exposure Potential
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'black' : 'black',
                            })}
                            p="lg"
                            className="mt-2 sm:py-6 rounded-md"
                        >
                            <div className="">
                                <div className="">
                                    <div className="p-6 mb-3 flex justify-between w-full overflow-auto">
                                        <div className=" w-[85%] min-w-[35rem]">
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Dermal Health Hazard
                                                        </p>
                                                        <p>5</p>
                                                    </div>
                                                    <div className="p-3 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Dermal Exposure Limit Rating
                                                        </p>
                                                        <p>3</p>
                                                    </div>
                                                </div>
                                                <div className="mx-4 rounded-md flex justify-center items-center bg-[#FC6464] w-[15%]">5</div>
                                            </div>
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Task Dermal Potential
                                                        </p>
                                                        <p>5</p>
                                                    </div>
                                                    <div className="p-3 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Dermal Contact Potential
                                                        </p>
                                                        <p>3</p>
                                                    </div>
                                                </div>
                                                <div className="mx-4 rounded-md flex justify-center items-center bg-[#FC6464] w-[15%]">5</div>
                                            </div>
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md bg-white">
                                                        <p className="font-bold ">
                                                            Time
                                                        </p>
                                                        <div className="py-2 px-3 mb-1 rounded-md flex justify-between bg-gray-100">
                                                            <p className="">
                                                                Frequency
                                                            </p>
                                                            <p>5</p>
                                                        </div>
                                                        <div className="py-2 px-3 rounded-md flex justify-between bg-gray-100">
                                                            <p className="">
                                                                Duration
                                                            </p>
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mx-4 rounded-md flex justify-center items-center bg-[#FF8744] w-[15%]">4.5</div>
                                            </div>
                                            <div className="mb-3 flex justify-between w-full">
                                                <div className="w-full">
                                                    <div className="p-3 mb-1 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Scale of Use
                                                        </p>
                                                        <p>2</p>
                                                    </div>
                                                    <div className="p-3 rounded-md flex justify-between bg-white">
                                                        <p className="">
                                                            Degree of Dermal Contact
                                                        </p>
                                                        <p>4</p>
                                                    </div>
                                                </div>
                                                <div className="mx-4 w-[15%]">
                                                    <div className=" mb-1 p-3 rounded-md flex justify-center items-center bg-[#ECC94E]">2</div>
                                                    <div className=" p-3 rounded-md flex justify-center items-center bg-[#FF8744]">4</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 mb-3 rounded-md flex justify-center items-center bg-white w-[15%]">15.5</div>
                                    </div>
                                    <div className="p-6 mb-1 rounded-md bg-white">
                                        <p className="font-bold ">
                                            Controls
                                        </p>
                                        <div className="w-full md:flex">
                                            <div className="w-full md:w-[85%]">
                                                <div className="md:flex">
                                                    <div className="w-full py-2 px-3 mb-1 rounded-md flex justify-between bg-gray-100">
                                                        <p>Existing Dermal Controls</p>
                                                        <p>-5</p>
                                                    </div>
                                                    <div className="w-full md:w-[15%] md:mx-4 px-3 py-2 mb-1 rounded-md flex justify-center bg-gray-100">
                                                        <p className="">

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-[15%] py-2 px-3 mb-1 rounded-md flex justify-center bg-gray-100">
                                                <p>-10</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 w-full md:flex">
                                            <div className="w-full md:w-[85%]">
                                                <div className="md:flex">
                                                    <div className="w-full py-2 px-3 mb-1 rounded-md flex justify-between bg-gray-100">
                                                        <p>Additional Dermal Controls</p>
                                                        <p>-5</p>
                                                    </div>
                                                    <div className="w-full md:w-[15%] md:mx-4 px-3 py-2 mb-1 rounded-md flex justify-center bg-gray-100">
                                                        <p className="">

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-[15%] py-2 px-3 mb-1 rounded-md flex justify-center bg-gray-100">
                                                <p>-5</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 mt-3 w-full md:flex">
                                        <div className="w-full md:w-[85%]">
                                            <div className="md:flex">
                                                <div className="w-full py-2 px-3 mb-1 rounded-md flex justify-between bg-white">
                                                    <p className="font-bold">Overall Score</p>
                                                </div>
                                                <div className="w-full md:w-[15%] md:mx-4 px-3 py-2 mb-1 rounded-md flex justify-center bg-white">
                                                    <p className="">

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[15%] py-2 px-3 mb-1 rounded-md flex justify-center bg-white">
                                            <p>0.5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold">
                            Additional Dermal Controls
                        </p>
                        <Card
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                                color: theme.colorScheme === 'dark' ? 'black' : 'black',
                            })}
                            p="lg"
                            className="mt-2 sm:py-6 rounded-md"
                        >
                            <div className="overflow-auto">
                                <div className="mt-2 p-4 md:px-0 sm:py-6 rounded-md min-w-[45rem]">
                                    <div className=" md:m-6 md:px-0  rounded-md overflow-auto">
                                        <p className="text-lg font-bold mb-2">
                                            Chemical Clothing
                                        </p>
                                        <table className="!w-full">
                                            <thead>
                                                <tr>
                                                    <th className="w-[25%]"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'> Substance</p></th>
                                                    <th className="w-[25%]"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>CAS# </p></th>
                                                    <th className="w-[25%]"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Chemical Clothing</p></th>
                                                    <th className="w-[25%]"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Breakthrough Time (mins) </p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={3}><p className='bg-white h-24 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td rowSpan={3}><p className='bg-white h-24 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> Tychem® SL</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'></p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'>Tychem® C3</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className=" md:m-6 md:px-0 rounded-md ">
                                        <p className="text-lg font-bold mb-2">
                                            Chemical Gloves
                                        </p>
                                        <table className="!w-full">
                                            <thead>
                                                <tr>
                                                    <th className="w-1/4"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'> Substance</p></th>
                                                    <th className="w-1/4"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>CAS# </p></th>
                                                    <th className="w-1/4"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Chemical Clothing</p></th>
                                                    <th className="w-1/4"><p className='bg-[#507A9B] rounded-md text-white text-sm py-1 mr-2'>Breakthrough Time (mins) </p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={3}><p className='bg-white h-40 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td rowSpan={3}><p className='bg-white h-40 rounded-md text-sm p-3 mr-2 text-center mt-2'> </p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> Nitrile Rubber</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'></p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'>Polyvinylalcohol (PVAL)</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'></p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'> Silvershield/4H® (PE/EVAL/PE</p></td>
                                                    <td><p className='bg-white rounded-md text-sm p-3 mr-2 text-center mt-2 min-h-[2.7rem]'></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Main >
    )
}