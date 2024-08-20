import Image from "next/image";
import SlideInFromBottom from "./animations/slideInFromBottom";

interface Props {
  title: string;
  addressText: string;
  addressLink: string;
  image: string;
}

export default function TrainingCentre({
  title,
  addressText,
  addressLink,
  image,
}: Props) {
  return (
    <SlideInFromBottom classes="flex w-full flex-col items-center relative justify-center overflow-x-hidden">
      <div className="flex h-fit lg:h-[275px] w-full lg:w-[450px] flex-col items-center justify-center gap-3 bg-black z-10 text-white text-2xl max-lg:mb-10 lg:absolute">
        <p className="text-center text-3xl">{title}</p>
        <p className="text-center">{addressText}</p>
      </div>
      <div className="grid w-full grid-cols-2 max-lg:grid-cols-1">
        <div className="relative max-lg:aspect-video">
          <Image
            className="object-cover"
            src={image}
            alt={`Зала на ${addressText}`}
            fill
          ></Image>
        </div>
        <div>
          <iframe
            src={addressLink}
            loading="lazy"
            className="h-[800px] w-full max-md:h-[500px]"
          ></iframe>
        </div>
      </div>
    </SlideInFromBottom>
  );
}
