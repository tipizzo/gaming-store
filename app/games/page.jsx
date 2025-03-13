import React from 'react';
import games from '@/lib/GamesData';
import GameCategories from '@/lib/CategoryData';
import GameCard from '../components/GameCard';

const Page = () => {
  // Group games by category

  return (
    <div className='mt-16'>
      <h1 className='mx-3 lg:mx-44 font-semibold text-2xl lg:text-3xl'>
        Explore The GamingVerse Offered by Kivu Gaming Store
      </h1>
    </div>
  );
};

export default Page;