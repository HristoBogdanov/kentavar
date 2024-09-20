import SlideInFromLeft from "./animations/slideInFromLeft";

interface Props {
  imagePath: string;
  text: string;
}

export default function HistoryParagraph({ imagePath, text }: Props) {
  return (
    <SlideInFromLeft classes="w-full grid grid-cols-1 lg:grid-cols-2">
      <div
        className="w-full h-full aspect-video bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      ></div>
      <div className="w-full bg-softBlack overflow-hidden h-full flex justify-center items-center border-l-8 border-red-800 p-10 lg:p-20">
        <p className="text-white text-lg lg:text-xl 2xl:text-2xl">{text}</p>
      </div>
    </SlideInFromLeft>
  );
}
