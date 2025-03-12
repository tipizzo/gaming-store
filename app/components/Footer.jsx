'use client'

import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ChevronUpIcon } from '@heroicons/react/24/solid';

import resources from '@/lib/ResourcesData';
import Link from 'next/link';

import { TypeAnimation } from 'react-type-animation';

const Footer = () => {
  return (
    <div className='mt-12 px-15 py-10 bg-gray-900'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-5'>
                <FaFacebook className='h-8 w-8 hover:text-gray-400 transition-all duration-300 cursor-pointer' />
                <FaXTwitter className='h-8 w-8 hover:text-gray-400 transition-all duration-300 cursor-pointer'  />
                <FaYoutube className='h-8 w-8 hover:text-gray-400 transition-all duration-300 cursor-pointer' />
                <FaInstagram className='h-8 w-8 hover:text-gray-400 transition-all duration-300 cursor-pointer' />
            </div>
            <button className='border p-2 hover:text-blue-500 transition-all duration-300 cursor-pointer'>
                <ChevronUpIcon className='h-7 w-7' />
            </button>
        </div>
        <div className='flex flex-col gap-2 mt-10'>
            <h3 className='font-bold text-gray-400'>Resources</h3>
            <div className='flex flex-col md:grid grid-cols-3 w-max gap-x-12'>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Support-A-Creator</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Distribute on KG</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Careers</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Company</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Fan Art Policy</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>UX Research</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Kinshasa</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Goma</Link>
                <Link href="" className='font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300'>Bukavu</Link>
            </div>
        </div>

        <hr className='text-gray-700 text-sm my-10' />
        <div className='flex flex-col md:w-1/2'>
            <p className='text-sm font-bold'>
            &copy; {new Date().getFullYear()}, KG Store for <TypeAnimation
                sequence={[
                    'Bukavu.',
                    3000,
                    'Goma.',
                    3000,
                    'Kinshasa.',
                    3000,
                    'Kolwezi.',
                    3000,
                    'Lubumbashi.',
                    3000
                ]}
                wrapper="span"
                speed={300}
                repeat={Infinity}
            /> 
            </p>
            <p className='text-sm'>
            All rights reserved. All trademarks, logos, and brand names are the property of their respective owners. Our website may include links to third-party sites for convenience; we are not responsible for their content or any associated risks.
            </p>
        </div>
    </div>
  )
}

export default Footer