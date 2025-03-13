"use client"

import gamesData from "@/lib/GamesData";
import { useParams } from "next/navigation";

const GameDetails = () => {

    const { id } = useParams()

    const game = gamesData.find((game) => game.id.toString() === id);

    if(!game) return <p>Game not found</p>

    return (
        <div>
            <h1>{game.title}</h1>
        </div>
    )
}

export default GameDetails;