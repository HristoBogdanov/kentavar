"use client";

import Link from "next/link";
import ReactPlayer from "react-player";

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-[70vh] lg:h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col w-full h-full p-6 py-[23px] text-white justify-center bg-softBlack max-md:pt-16 uppercase text-[13vw] leading-[13vw] lg:text-[5vw] md:pl-20 gap-3 lg:leading-[5vw] font-black">
          <h1>Таекуондо клуб</h1>
          <h1 className="text-red-800">Кентавър</h1>
          <p className="text-3xl lg:text-4xl pt-10">не мечтай за победа.</p>
          <p className="text-3xl lg:text-4xl text-red-800">тренирай за нея.</p>
          <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-20 pt-10 lg:pt-20">
            <Link
              href="/about-us"
              className="py-4 px-4 lg:px-8 text-xl bg-white text-red-800 border-2 border-white w-fit transition-all hover:text-white duration-500 hover:bg-red-800"
            >
              Виж повече
            </Link>
            <Link
              href="/contacts"
              className="py-4 px-4 lg:px-8 text-xl bg-red-800 text-white border-2 border-red-800 w-fit transition-all hover:text-red-800 duration-500 hover:bg-white"
            >
              Свържи се с нас
            </Link>
          </div>
        </div>
        {/* <div
          style={{
            backgroundImage: `url('lubo3.jpg')`,
          }}
          className="z-0 h-full w-full bg-cover bg-center bg-no-repeat flex flex-col items-center"
        ></div> */}
      </div>

      <div className="relative z-0 h-[70vh] lg:h-[100vh] w-full flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 z-[-1] grayscale bg-cover bg-center"
          style={{ backgroundImage: `url('ico.jpeg')` }}
        />
        <div className="relative w-[90%] max-w-[700px] aspect-[1.78/1] border-t-[5px] border-b-[5px] border-red-800">
          <ReactPlayer
            url={"/videos/video2.mp4"}
            width={"100%"}
            height={"100%"}
            controls
            loop
          />
        </div>
      </div>
    </div>
  );
}
