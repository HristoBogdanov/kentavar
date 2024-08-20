import FadeIn from "./animations/fadeIn";
import SlideInFromRight from "./animations/slideInFromRight";
import StatisticBox from "./statisticBox";

export default function NumbersSection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-10 py-20 lg:py-40 bg-black text-white">
        <FadeIn>
          <h1 className="uppercase text-5xl text-center font-black px-6">
            Нашата <span className="text-red-800">история</span> в цифри
          </h1>
        </FadeIn>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 px-6">
          <StatisticBox number={50} text="състезателя" />
          <StatisticBox number={30} text="отборни награди" />
          <StatisticBox number={4} text="европейски медалисти" />
          <StatisticBox number={3} text="участници на световно" />
        </div>
      </div>
      <SlideInFromRight classes="">
        <div
          style={{ backgroundImage: `url('group.jpeg')` }}
          className="z-0 h-full min-h-[500px] w-full bg-cover bg-center bg-black opacity-100"
        ></div>
      </SlideInFromRight>
    </div>
  );
}
