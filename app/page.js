import Image from "next/image";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";


export default function Home() {
  return (
    <main>
      <SearchSection />
      <Hero />
    </main>
  );
}
