import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'


const FortniteAd = () => {
    return (
        <div className='mt-10 mx-10 lg:mx-44'>
            <div className='flex flex-col lg:flex-row justify-around gap-2 sm:gap-4'>
                <div className='flex flex-col gap-3'>
                    <img className='h-[300px] md:w-[300px] lg:w-[600px] rounded-lg' src='/assets/fortnite_lego.png' />
                    <h3 className='text-xl font-bold'>Fortnite Lego</h3>
                    <p className='text-gray-400 font-semibold'>This is a creative collaboration between Epic Games and LEGO, allowing players to build and explore LEGO-themed worlds within Fortnite.</p>
                    <button className='flex items-center gap-1 border w-max p-2 hover:text-blue-500 rounded-lg font-semibold cursor-pointer transition-all duration-300'>Learn More <ArrowTopRightOnSquareIcon className='h-5 w-5' /></button>
                </div>
                <div className='flex flex-col gap-3'>
                    <img className='h-[300px] md:w-[300px] lg:w-[600px] rounded-lg' src='/assets/fortnite_rift.png' />
                    <h3 className='text-xl font-bold'>Fortnite Rift</h3>
                    <p className='text-gray-400 font-semibold'>In Fortnite, rift servers are special game modes or servers that allow players to experience unique, experimental, or limited-time gameplay.</p>
                    <button className='flex items-center gap-1 border w-max p-2 hover:text-blue-500 rounded-lg font-semibold cursor-pointer transition-all duration-300'>Learn More <ArrowTopRightOnSquareIcon className='h-5 w-5' /></button>
                </div>
            </div>
        </div>
    )
}

export default FortniteAd