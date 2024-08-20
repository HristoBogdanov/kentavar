import React from "react";
import HistoryParagraph from "./historyParagraph";
import HistoryReverseParagraph from "./historyReverseParagraph";
import Heading from "./heading";

const para1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud xercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit ametconsectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudxercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud xercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit ametconsectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruxercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud xercitation ullamco laboris nisi utaliquip ex ea commodo consequat.";

export default function HistorySection() {
  return (
    <div className="w-full flex flex-col lg:gap-20 pb-20 lg:pb-32">
      <Heading firstTitle="нашата" secondTitle="история" />
      <HistoryParagraph imagePath="lubo3.jpg" text={para1} />
      <HistoryReverseParagraph imagePath="lubo3.jpg" text={para1} />
    </div>
  );
}
