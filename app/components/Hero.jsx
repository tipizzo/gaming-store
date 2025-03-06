'use client'

import React from 'react';

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

            <div className='hidden lg:flex gap-10 mx-44 mt-10'>
                    <div>
                        <img src="/assets/mk_1_hero.jpg" alt='Main Image' className='h-[800px] w-[1300px] rounded-xl' />
                    </div>
                    <div>
                        <img src="/assets/blackops_6.jpg" alt='Main Image' className='h-[800px] w-[1300px] rounded-xl' />
                    </div>
                <img src="/assets/mk_1_hero.jpg" alt='Main Image' className='h-[800px] w-[1300px] rounded-xl' />
                <div className='flex flex-col gap-16'>
                    <h1 className='font-bold text-3xl'>Gaming News</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
