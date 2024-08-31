import ContactsSection from "@/components/contactsSection";
import TrainingCentresSction from "@/components/trainingCentresSction";

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden bg-black gap-10 lg:gap-20">
      <ContactsSection />
      <TrainingCentresSction />
    </main>
  );
}
