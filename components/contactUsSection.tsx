import Link from "next/link";
import SlideInFromLeft from "./animations/slideInFromLeft";
import SlideInFromRight from "./animations/slideInFromRight";

export default function ContactUsSection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <SlideInFromLeft classes="">
        <div
          style={{
            backgroundImage: `url('Любомир-Богданов-Европейска-Олимпияда.jpg')`,
          }}
          className="z-0 h-full min-h-[500px] w-full bg-cover bg-center"
        ></div>
      </SlideInFromLeft>
      <SlideInFromRight classes="flex flex-col justify-center gap-10 px-6 py-14 md:p-14 lg:p-20 xl:p-40 bg-black border-b-8 border-t-8 border-red-800 text-white">
        <div className="flex flex-col ">
          <h1 className="uppercase text-5xl font-black">
            <span className="text-red-800">свържи се </span>с нас.
          </h1>
          <h1 className="uppercase text-5xl font-black">
            стани <span className="text-red-800">шампион.</span>
          </h1>
        </div>
        <p className="text-xl">
          Очакваме Ви! Нека спортът бъде част от нашия и Вашия начин на живот!
        </p>
        <Link
          href="/contacts"
          className="py-4 px-8 text-xl bg-red-800 text-white border-2 border-red-800 w-fit transition-all hover:text-red-800 duration-500 hover:bg-white"
        >
          КОНТАКТИ
        </Link>
      </SlideInFromRight>
    </div>
  );
}
