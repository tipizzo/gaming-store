import React from 'react'
import games from '@/lib/GamesData'
import GameCategories from '@/lib/CategoryData'
import GameCard from '../components/GameCard'
import SearchSection from '../components/SearchSection'

const page = () => {
  return (
    <div className='mt-16'>
        <h1 className='mx-3 lg:mx-44 font-semibold text-2xl lg:text-3xl'>Explore The GamingVerse Offered by Kivu Gaming Store</h1>
        {GameCategories.map((category) => ({
            category,
            filteredGames: games.filter((game) => game.category === category.name),
        }))
        .filter(({ filteredGames }) => filteredGames.length > 0)
        .map(({ category, filteredGames }) => (
            <GameCard key={category.id} title={category.name} games={filteredGames} />
        ))
        }
    </div>
  )
}

export default page
{/* 
<GameCard key={category.id} title={category.name} games={games.filter((game) => game.category === category.name)} />
*/}