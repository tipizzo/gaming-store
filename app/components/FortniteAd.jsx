import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'


const FortniteAd = () => {
    return (
        <div className='mt-10 mx-44'>
            <div className='flex justify-around gap-2'>
                <div className='flex flex-col gap-3'>
                    <img className='h-[300px] w-[600px] rounded-lg' src='/assets/fortnite_lego.png' />
                    <h3 className='text-xl font-bold'>Fortnite Lego</h3>
                    <p className='text-gray-400 font-semibold'>This is a creative collaboration between Epic Games and LEGO, allowing players to build and explore LEGO-themed worlds within Fortnite.</p>
                    <button className='flex items-center gap-1 border w-max p-2 rounded-lg font-semibold cursor-pointer'>Learn More <ArrowTopRightOnSquareIcon className='h-5 w-5' /></button>
                </div>
                <div className='flex flex-col gap-3'>
                    <img className='h-[300px] w-[600px] rounded-lg' src='/assets/fortnite_fest.png' />
                    <h3 className='text-xl font-bold'>Fortnite Festival</h3>
                    <p className='text-gray-400 font-semibold'>Fortnite Festival is a limited-time event or mode that celebrates in-game events, collaborations, or milestones.</p>
                    <button className='flex items-center gap-1 border w-max p-2 rounded-lg font-semibold cursor-pointer'>Learn More <ArrowTopRightOnSquareIcon className='h-5 w-5' /></button>
                </div>
                <div className='flex flex-col gap-3'>
                    <img className='h-[300px] w-[600px] rounded-lg' src='/assets/fortnite_rift.png' />
                    <h3 className='text-xl font-bold'>Fortnite Rift</h3>
                    <p className='text-gray-400 font-semibold'>In Fortnite, rift servers are special game modes or servers that allow players to experience unique, experimental, or limited-time gameplay.</p>
                    <button className='flex items-center gap-1 border w-max p-2 rounded-lg font-semibold cursor-pointer'>Learn More <ArrowTopRightOnSquareIcon className='h-5 w-5' /></button>
                </div>
            </div>
        </div>
    )
}

export default FortniteAd