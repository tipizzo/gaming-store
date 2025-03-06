'use client'

import React, { useEffect, useState, useRef } from 'react'
import { MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const SearchSection = () => {

    const [openSearchBar, setOpenSearchBar] = useState(false)
    const [openDiscover, setOpenDiscover] = useState(false)

    return (
        <>
            {/* Mobile Version */}
            <div className='lg:hidden flex my-10 '>
                <button onClick={() => setOpenSearchBar(!openSearchBar)} className='pl-10 cursor-pointer'>
                    {openSearchBar ? (
                        <XMarkIcon className='w-5 h-5' />
                    ) : (
                        <MagnifyingGlassIcon className='w-5 h-5' />
                    )}
                </button>
                <div className='flex items-center gap-2 mx-auto'>
                    <h1 className='font-semibold text-lg'>Discover</h1>
                    {openDiscover ? (
                        <ChevronUpIcon onClick={() => setOpenDiscover(false)} className='size-3 cursor-pointer' />
                    ) : <ChevronDownIcon onClick={() => setOpenDiscover(true)} className='size-3 cursor-pointer' />}
                </div>
            </div>

            {/* Open the search bar */}
            {openSearchBar && (
                <div className='mx-6 py-5'>
                    <input type='search' placeholder='search Store' className='bg-gray-800 text-slate-50 font-light p-5 w-full rounded-2xl' />
                </div>
            )}

            {/* Open Discover Menu */}
            {openDiscover && (
                <div className='flex flex-col bg-gray-900 py-5 my-6 text-center align-center gap-3 rounded-md z-50'>
                    <h1 className='font-bold'>Discover</h1>
                    <Link href="" className='text-white cursor-pointer'>Browse</Link>
                    <Link href="" className='text-white cursor-pointer'>News</Link>
                </div>
            )}

            {/* Desktop Version */}
            <div className="hidden lg:flex gap-5 mx-40">
                <div className='flex items-center'>
                    <MagnifyingGlassIcon className='w-4 h-4 relative left-7' />
                    <input type='search' placeholder='search Store' className='bg-gray-800 text-slate-50 font-light py-3 px-10 align-center rounded-xl focus:border-blue-300 focus:ring-2 focus:ring-blue-300' />
                </div>
                <div className='flex items-center gap-6'>
                    <h1 className='font-bold'>Discover</h1>
                    <Link href="" className='text-white cursor-pointer'>Browse</Link>
                    <Link href="" className='text-white cursor-pointer'>News</Link>
                </div>
            </div>


        </>
    )
}

export default SearchSection