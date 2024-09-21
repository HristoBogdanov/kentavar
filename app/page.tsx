import ContactUsSection from "@/components/contactUsSection";
import Hero from "@/components/hero";
import HomeGrid from "@/components/homeGrid";
import NumbersSection from "@/components/numbersSection";

export const metadata = {
  title: "Контакти",
};

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden bg-black">
      <Hero />
      <HomeGrid />
      <NumbersSection />
      <ContactUsSection />
    </main>
  );
}
