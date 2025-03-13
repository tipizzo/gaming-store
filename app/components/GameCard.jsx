'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import gamesData from '@/lib/GamesData';

const GameCard = ({ title, gamesData }) => {
    const cardsRef = useRef(null);

    const scrollLeft = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollLeft -= 500;
        }
    };

    const scrollRight = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollLeft += 500;
        }
    }

    return (
        <div className='title-cards mx-3 lg:mx-44 mt-10'>
            <div className='flex justify-between'>
                <h2 className='flex items-center gap-1 md:gap-2 font-bold text-xl md:text-2xl'>
                    {title} <ChevronRightIcon className='h-5 w-5 md:h-7 md:w-7' />
                </h2>
                <div className='hidden lg:flex items-center gap-5'>
                    <button onClick={scrollLeft} className='border rounded-full p-1 hover:text-blue-500 text-white cursor-pointer transition-all duration-300'>
                        <ChevronLeftIcon className='h-4 w-4' />
                    </button>
                    <button onClick={scrollRight} className='border rounded-full p-1 hover:text-blue-500 text-white cursor-pointer transition-all duration-300'>
                        <ChevronRightIcon className='h-4 w-4' />
                    </button>
                </div>
            </div>
            <div
                ref={cardsRef}
                className='card-list flex gap-12 mt-8 overflow-x-auto flex-nowrap game-card'
                style={{ scrollBehavior: 'smooth', paddingBottom: '10px' }}
            >
                {gamesData.map((item, index) => (
                    <div key={index} className='card flex flex-col gap-4 cursor-pointer game-card' style={{ minWidth: '220px' }}>
                        <Link href={`/games/${item.id}`} className='flex flex-col'>
                            <img src={item.image} alt={item.title} className='h-[300px] w-[200px] rounded-lg mb-2' />
                            <span className='text-gray-400 font-bold text-sm px-1 rounded-xl'>{item.category}</span>
                            <h3 className='font-semibold text-xl'>{item.title}</h3>
                            <span className='font-bold bg-gray-600 text-gray-300 w-max px-1 rounded-lg'>{item.availability}</span>
                            <span className='font-semibold'>{item.price}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameCard;
