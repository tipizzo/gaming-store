import Image from "next/image";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main>
      <SearchSection />
      <Hero />
    </main>
  );
}
