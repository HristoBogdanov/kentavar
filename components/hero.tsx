export default function Hero() {
  return (
    <>
      <div
        style={{ backgroundImage: `url('hero1.jpg')` }}
        className="absolute left-0 top-0 z-0 h-[70%] lg:h-full w-full lg:w-1/2 bg-cover bg-center flex justify-center items-center"
      >
        <div className="flex flex-col w-full p-6 text-white uppercase text-[13vw] leading-[13vw] lg:text-[6vw] lg:leading-[6vw] font-black">
          <h1>Таекуондо</h1>
          <h1>клуб</h1>
          <h1 className="text-red-800">Кентавър</h1>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url('hero2.jpg')` }}
        className="absolute right-0 top-[70%] lg:top-0 z-0 h-[70%] lg:h-full w-full lg:w-1/2 bg-cover bg-center"
      ></div>
    </>
  );
}
