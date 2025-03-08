import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const GameCard = () => {
    return (
        <div className='mx-44 mt-10 flex flex-col gap-5'>
            <h1 className='flex items-center gap-2 font-bold text-2xl'>Discover Something New <ChevronRightIcon className='h-7 w-7' /></h1>
            <div className='flex flex-col gap-2 cursor-pointer'>
                <div>
                    <img src='/assets/far-cry-2.webp' alt='' className='h-[300px] w-[250px] rounded-lg mb-2' />
                    <span className='text-gray-400 font-bold text-sm px-1 rounded-xl'>Action & Adventure</span>
                </div>
                <h3 className='font-semibold text-xl'>FAR CRY 2</h3>
                <span className='font-bold bg-gray-600 text-gray-300 w-max px-2 rounded-lg'>Now on KGStore</span>
                <span className='font-semibold'>Free</span>
            </div>
        </div>
    )
}

export default GameCard