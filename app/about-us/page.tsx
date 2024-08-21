import HistorySection from "@/components/historySection";
import HomeGrid from "@/components/homeGrid";
import NumbersSection from "@/components/numbersSection";
import TrainingCentresSction from "@/components/trainingCentresSction";

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden bg-black pt-20 lg:pt-32">
      <HistorySection />
      <NumbersSection />
      <HomeGrid />
      <TrainingCentresSction />
    </main>
  );
}
