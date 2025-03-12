import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import games from '@/lib/GamesData'

const GameCard = () => {
    return (
        <div className='ml-44 mt-10 flex flex-col gap-5'>
            <h1 className='flex items-center gap-2 font-bold text-2xl'>Discover Something New <ChevronRightIcon className='h-7 w-7' /></h1>
            <div className='flex  gap-8 game-card'>
                {games.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-2 cursor-pointer'>
                            <div>
                                <img src={item.image} alt='' className='h-[300px] w-[200px] rounded-lg mb-2' />
                                <span className='text-gray-400 font-bold text-sm px-1 rounded-xl'>{item.category}</span>
                            </div>
                            <h3 className='font-semibold text-xl'>{item.title}</h3>
                            <span className='font-bold bg-gray-600 text-gray-300 w-max px-2 rounded-lg'>{item.availability}</span>
                            <span className='font-semibold'>{item.price}</span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default GameCard