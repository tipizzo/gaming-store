import Image from "next/image";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import GameCard from "./components/GameCard";
import FortniteAd from "./components/FortniteAd";


export default function Home() {
  return (
    <main>
      <SearchSection />
      <Hero />
      <GameCard title="Discover Something New" />
      <FortniteAd />
      <GameCard title="Featured Discounts" />
      <GameCard title="Top New Realeses" />
    </main>
  );
}
