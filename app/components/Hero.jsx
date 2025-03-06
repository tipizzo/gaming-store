'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import {EffectFade, Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {

    return (
        <div>
            {/* Mobile Version */}
            <div className='lg:hidden mx-6'>
                <img src='/assets/mk_1_hero.jpg' alt='Main Image' />
                <div className='flex flex-col gap-2 mt-5'>
                    <h1 className='font-bold text-3xl'>Gaming News</h1>
                </div>
            </div>

            {/* Desktop Version */}

            <div className='hidden lg:flex gap-5 ml-44 mt-10'>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[EffectFade, Autoplay, Pagination]}
                >
                    <SwiperSlide>
                        <img src="/assets/blackops_6.jpg" alt='Main Image' className='h-[650px] w-[1150px] rounded-xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/mk_1_hero.jpg" alt='Main Image' className='h-[650px] w-[1150px] rounded-xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/gta_5.jpg" alt='Main Image' className='h-[650px] w-[1150px] rounded-xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/tekken_7.jpg" alt='Main Image' className='h-[650px] w-[1150px] rounded-xl' />
                    </SwiperSlide>
                </Swiper>

                <div className='flex flex-col justify-start w-full mr-16'>
                    <h1 className='font-bold text-3xl'>Gaming News</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
