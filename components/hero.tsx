import NextVideo from "next-video";
import video2 from "@/videos/video2.mp4";

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-[70vh] lg:h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col w-full p-6 py-[23px] text-white bg-[#101010] uppercase text-[13vw] leading-[13vw] lg:text-[6vw] md:pl-20 gap-3 lg:leading-[6vw] font-black">
          <h1>Таекуондо</h1>
          <h1>клуб</h1>
          <h1 className="text-red-800">Кентавър</h1>
        </div>
        <div
          style={{
            backgroundImage: `url('lubo3.jpg')`,
          }}
          className="z-0 h-full w-full bg-cover bg-center bg-no-repeat flex flex-col items-center"
        ></div>
      </div>

      <div className="relative z-0 h-[70vh] lg:h-[100vh] w-full flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 z-[-1] grayscale bg-cover bg-center"
          style={{ backgroundImage: `url('ico.jpeg')` }}
        />
        <div className="relative w-[90%] max-w-[592px] aspect-[1.78/1] border-t-[5px] border-b-[5px] border-red-800">
          <NextVideo src={video2} accentColor="#991b1b" className="w-full" />
        </div>
      </div>
    </div>
  );
}
