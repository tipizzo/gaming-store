import Image from "next/image";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import GameCard from "./components/GameCard";


export default function Home() {
  return (
    <main>
      <SearchSection />
      <Hero />
      <GameCard />
    </main>
  );
}
