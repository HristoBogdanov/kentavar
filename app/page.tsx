import Hero from "@/components/hero";
import HomeGrid from "@/components/homeGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <HomeGrid />
    </main>
  );
}
