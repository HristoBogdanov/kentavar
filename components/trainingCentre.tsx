import Image from "next/image";
import SlideInFromBottom from "./animations/slideInFromBottom";
import Link from "next/link";

interface Props {
  title: string;
  addressText: string;
  addressIframeLink: string;
  addressMapsLink: string;
  image: string;
}

export default function TrainingCentre({
  title,
  addressText,
  addressIframeLink,
  addressMapsLink,
  image,
}: Props) {
  return (
    <SlideInFromBottom classes="flex w-full flex-col items-center relative justify-center overflow-x-hidden">
      <div className="flex h-[200px] px-6 w-full lg:w-[450px] flex-col items-center justify-center gap-3 bg-black z-10 text-white text-2xl max-lg:mb-10 border-t-8 border-b-8 border-red-800 lg:absolute">
        <Link
          href={addressMapsLink}
          className="text-center text-3xl transition-all duration-500 hover:text-red-800"
          target="_blank"
        >
          {title}
        </Link>
        <Link
          href={addressMapsLink}
          className="text-center transition-all duration-500 hover:text-red-800"
          target="_blank"
        >
          {addressText}
        </Link>
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
            src={addressIframeLink}
            loading="lazy"
            className="h-[800px] w-full max-md:h-[500px]"
          ></iframe>
        </div>
      </div>
    </SlideInFromBottom>
  );
}
