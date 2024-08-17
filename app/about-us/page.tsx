import HistoryParagraph from "@/components/historyParagraph";
import HistoryReverseParagraph from "@/components/historyReverseParagraph";

const para1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud xercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit ametconsectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudxercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud xercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit ametconsectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruxercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud xercitation ullamco laboris nisi utaliquip ex ea commodo consequat.";

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col lg:gap-32 overflow-x-hidden bg-softBlack pt-20 lg:pt-32">
      <HistoryParagraph imagePath="lubo3.jpg" text={para1} />
      <HistoryReverseParagraph imagePath="lubo3.jpg" text={para1} />
    </main>
  );
}
