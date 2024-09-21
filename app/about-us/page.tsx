import HistorySection from "@/components/historySection";
import HomeGrid from "@/components/homeGrid";
import NumbersSection from "@/components/numbersSection";
import TrainingCentresSction from "@/components/trainingCentresSction";
import CoachesSection from "@/components/coachesSection";
import ContactUsSection from "@/components/contactUsSection";

export const metadata = {
  title: "За нас",
};

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden bg-black pt-20 lg:pt-32 gap-20">
      <HistorySection />
      <NumbersSection />
      <HomeGrid />
      <TrainingCentresSction />
      <CoachesSection />
      <ContactUsSection />
    </main>
  );
}
