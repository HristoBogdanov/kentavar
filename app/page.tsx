import Hero from "@/components/hero";
import HomeGrid from "@/components/homeGrid";
import NumbersSection from "@/components/numbersSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <HomeGrid />
      <NumbersSection />
    </main>
  );
}
