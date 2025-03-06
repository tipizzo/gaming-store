import React from 'react';

const Hero = () => {
    return (
        <div>
            {/* Mobile Version */}
            <div className='lg:hidden mx-6'>
                <img src='/assets/mk_1.jpg' alt='Main Image' />
            </div>

            {/* Desktop Version */}
            <div className='hidden lg:flex gap-10 mx-44 mt-5'>
                <img src="/assets/mk_1.jpg" alt='Main Image' className='h-[800px] w-[1300px] rounded-xl' />
                <div className='flex flex-col gap-16'>
                    <img src="/assets/scorpion.jpg" alt='Character' className='h-[150px] w-[250px] rounded-xl' />
                    <img src="/assets/scorpion.jpg" alt='Character' className='h-[150px] w-[250px] rounded-xl' />
                    <img src="/assets/scorpion.jpg" alt='Character' className='h-[150px] w-[250px] rounded-xl' />
                    <img src="/assets/scorpion.jpg" alt='Character' className='h-[150px] w-[250px] rounded-xl' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
