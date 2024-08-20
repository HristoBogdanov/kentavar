import SlideInFromRight from "./animations/slideInFromRight";

interface Props {
  imagePath: string;
  text: string;
}

export default function HistoryReverseParagraph({ imagePath, text }: Props) {
  return (
    <SlideInFromRight classes="w-full flex max-lg:flex-col justify-end">
      <div
        className="w-[100vw] max-w-[1300px] aspect-video relative bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      >
        <div className="w-[100vw] lg:w-[50vw] bg-softBlack h-fit absolute top-[100%] lg:right-[50vw] lg:top-1/2 lg:-translate-y-1/2 border-r-8 border-red-800 p-10 lg:p-20">
          <p className="text-white text-lg lg:text-xl">{text}</p>
        </div>
      </div>
      <div className="w-[100vw] lg:w-0 bg-softBlack h-fit lg:h-0 border-r-8 border-red-800 p-10 lg:p-0 overflow-hidden">
        <p className="text-white text-lg lg:text-xl">{text}</p>
      </div>
    </SlideInFromRight>
  );
}
