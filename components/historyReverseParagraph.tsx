import SlideInFromRight from "./animations/slideInFromRight";

interface Props {
  imagePath: string;
  text: string;
}

export default function HistoryReverseParagraph({ imagePath, text }: Props) {
  return (
    <SlideInFromRight classes="w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full bg-softBlack h-full flex justify-center items-center border-l-8 border-red-800 p-10 lg:p-20">
        <p className="text-white text-lg lg:text-xl 2xl:text-2xl">{text}</p>
      </div>
      <div
        className="w-full h-full aspect-video bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      ></div>
    </SlideInFromRight>
  );
}
