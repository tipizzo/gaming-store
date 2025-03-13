"use client"

import games from "@/lib/GamesData";
import { useParams } from "next/navigation";

const GameDetails = () => {

    const { id } = useParams()

    const game = games.find((game) => game.id.toString() === id);

    if(!game) return <p>Game not found</p>

    return (
        <div className="flex flex-col gap-8 w-max my-10 mx-auto">
            <h1 className="text-2xl font-bold">{game.title} - <span>{game.category}</span></h1>
            <img src={game.image} className="w-[400px] h-[600px]" />
            <p className="text-lg font-semibold">{game.description}</p>
            <button className="w-max border p-2 font-semibold hover:text-blue-500 transition-all duration-300">GET IT NOW</button>
        </div>
    )
}

export default GameDetails;