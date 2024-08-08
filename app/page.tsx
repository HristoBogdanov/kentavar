import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col lg:flex-col">
      <Hero />
    </main>
  );
}
