'use client'

import React, { useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <nav className='my-8 mx-6 lg:mx-12'>
                {/* Mobile Navbar */}
                <div className='lg:hidden flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <button>
                                <Link href="/">KIVU GAMING</Link>
                            </button>
                            <ChevronDownIcon className='size-3' />
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl hover:text-gray-300 transition-all duration-300 cursor-pointer'>Explore</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className='bg-blue-300 text-black font-semibold p-1 rounded-md cursor-pointer hover:bg-blue-400 transition-all duration-300'>Download</button>
                        <button onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer'>
                            {openMenu ? (
                                <XMarkIcon className='h-8 w-8' />
                            ) : (
                                <Bars3Icon className='h-8 w-8' />
                            )}
                        </button>

                    </div>
                </div>


                {/* Desktop Navbar */}

                <div className='hidden lg:flex justify-between items-center'>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <h1 className='font-semibold text-lg cursor-pointer'><Link href="/">KIVU GAMING</Link></h1>
                            <ChevronDownIcon className='size-3' />
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl hover:text-gray-300 transition-all duration-300 cursor-pointer'><Link href="/games">Explore</Link></h3>
                        </div>
                        <ul className='flex gap-4'>
                            <li className='text-slate-50 font-medium text-lg'><Link href="">Products</Link></li>
                            <li className='text-slate-50 font-medium text-lg'><Link href="">Support</Link></li>
                            <li className='text-slate-50 font-medium text-lg'><Link href="">Distribute</Link></li>
                            <li className='text-slate-50 font-medium text-lg'><Link href="">Buy me a Coffee</Link></li>
                        </ul>
                    </div>
                    <div className='flex gap-5'>
                        <button className='bg-blue-300 text-black font-semibold p-1 rounded-md cursor-pointer hover:bg-blue-400 transition-all duration-300'>Download</button>
                        <button className='border-2 border-blue-300 font-semibold py-1 px-3 rounded-md cursor-pointer'>Sign In</button>
                        <button><GlobeAltIcon className='w-7 h-7' /></button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu bar */}
            {openMenu && (
                <div className='fixed w-full h-screen text-center bg-custom-gradient bg-opacity-50 pt-32 flex flex-col gap-6 z-50'>
                    <h1 className='font-bold text-4xl'>Menu</h1>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-slate-50 font-medium text-lg'><Link href="">Home</Link></li>
                        <li className='text-slate-50 font-medium text-lg'><Link href="">Products</Link></li>
                        <li className='text-slate-50 font-medium text-lg'><Link href="">Support</Link></li>
                        <li className='text-slate-50 font-medium text-lg'><Link href="">Distribute</Link></li>
                        <li className='text-slate-50 font-medium text-lg'><Link href="">Buy me a Coffee</Link></li>
                    </ul>
                    <div className='flex justify-center gap-4'>
                        <button><GlobeAltIcon className='w-7 h-7' /></button>
                        <button className='border-2 border-blue-300 font-semibold py-1 px-3 rounded-md cursor-pointer'>Sign In</button>
                    </div>
                </div>
            )}
        </>

    );
}

export default Navbar