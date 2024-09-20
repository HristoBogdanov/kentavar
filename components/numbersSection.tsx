import Image from "next/image";
import FadeIn from "./animations/fadeIn";
import SlideInFromRight from "./animations/slideInFromRight";
import StatisticBox from "./statisticBox";

export default function NumbersSection() {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-10 py-20 bg-black border-b-8 border-t-8 border-red-800 text-white">
        <FadeIn>
          <h1 className="uppercase text-5xl text-center font-black px-6">
            Нашата <span className="text-red-800">история</span> в цифри
          </h1>
        </FadeIn>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          <StatisticBox number={50} text="състезатели" />
          <StatisticBox number={30} text="отборни награди" />
          <StatisticBox number={4} text="европейски медалисти" />
          <StatisticBox number={3} text="участници на световно" />
        </div>
      </div>
      <SlideInFromRight classes="w-full h-full max-xl:aspect-[1.33/1] relative">
        <Image
          src="/Клуб-Кентавър.jpeg"
          alt="Клуб Кентавър"
          layout="fill"
          objectFit="cover"
        />
      </SlideInFromRight>
    </div>
  );
}
