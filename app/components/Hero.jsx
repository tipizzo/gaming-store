'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import { PlusCircleIcon } from '@heroicons/react/24/outline';

import HeroData from '@/lib/DummyData';

const Hero = () => {

    return (
        <div>

            {/* Mobile Version */}
            <div className='lg:hidden mx-6'>
                <Swiper
                    spaceBetween={50}
                    effect={'fade'}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[EffectFade, Autoplay, Pagination]}
                >
                    <SwiperSlide>
                        <img src='/assets/blackops_6.jpg' alt='' className='h-[250px] md:h-[500px] rounded-xl object-cover shadow-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/assets/mk_1_hero.jpg' alt='' className='h-[250px] md:h-[500px] rounded-xl object-cover shadow-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/assets/gta_5.jpg.jpg' alt='' className='h-[250px] md:h-[500px] rounded-xl object-cover shadow-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/assets/tekken_7.jpg' alt='' className='h-[250px] md:h-[500px] rounded-xl object-cover shadow-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/assets/fortnite.jpg' alt='' className='h-[250px] md:h-[500px] rounded-xl object-cover shadow-lg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/assets/fortnite.jpg' alt='' className='h-[250px] md:h-[500px] rounded-xl object-cover shadow-lg' />
                    </SwiperSlide>
                </Swiper>

                <div className='flex flex-col gap-2 mt-5'>
                    <h1 className='font-bold text-3xl'>Gaming News</h1>
                </div>
            </div>

            {/* Desktop Version */}

            <div className='hidden lg:flex gap-5 ml-44 mt-10'>
                <Swiper
                    spaceBetween={50}
                    effect={'fade'}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[EffectFade, Autoplay, Pagination]}
                >
                    {HeroData.map((item, index) => (
                        <SwiperSlide className='relative' key={index}>
                        <img src={item.imgUrl} alt={item.name} className='h-[650px] w-[1200px] rounded-xl object-cover shadow-lg' />
                        <div className='flex flex-col gap-2 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white w-[400px]'>
                            <h1 className='font-bold text-xl'>{item.isOut}</h1>
                            <p className='text-md text-slate-50 font-semibold'>{item.name} {item.description}</p>
                            <div className='flex gap-2 mb-4'>
                                <button className='bg-blue-400 text-black font-bold px-2 rounded-full'>-{item.reduction}%</button>
                                <button className='line-through font-semibold text-gray-300'>${item.price}</button>
                                <button className='font-semibold'>${item.reductionPrice}</button>
                            </div>
                            <div className='flex gap-8'>
                                <button className='bg-white text-black font-semibold px-6 py-2 rounded-lg'>Buy Now</button>
                                <button className='flex gap-2 items-center'><PlusCircleIcon className='w-6 h-6' /> Add to Wishlist</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                    
                </Swiper>

                <div className='flex flex-col justify-start w-full  mr-26'>
                    <h1 className='font-bold text-3xl'>Gaming News</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
