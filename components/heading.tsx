import SlideInFromBottom from "./animations/slideInFromBottom";

export default function Heading({
  firstTitle,
  secondTitle,
}: {
  firstTitle: string;
  secondTitle: string;
}) {
  return (
    <SlideInFromBottom classes="flex justify-center items-center gap-6 px-6">
      <h1 className="text-4xl lg:text-6xl uppercase text-white text-center w-fit font-black">
        {firstTitle} <span className="text-red-800">{secondTitle}</span>
      </h1>
    </SlideInFromBottom>
  );
}
