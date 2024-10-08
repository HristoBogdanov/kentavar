import ContactsSection from "@/components/contactsSection";
import TrainingCentresSction from "@/components/trainingCentresSction";

export const metadata = {
  title: "Контакти",
};

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black gap-10 lg:gap-20">
      <ContactsSection />
      <TrainingCentresSction />
    </main>
  );
}
