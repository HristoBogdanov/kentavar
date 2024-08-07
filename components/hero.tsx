export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      <div
        style={{ backgroundImage: `url('hero1.jpg')` }}
        className="z-0 h-[70vh] lg:h-[100vh] w-full bg-cover bg-center flex justify-center items-center"
      >
        <div className="flex flex-col w-full p-6 text-white uppercase text-[13vw] leading-[13vw] lg:text-[6vw] lg:leading-[6vw] font-black">
          <h1>Таекуондо</h1>
          <h1>клуб</h1>
          <h1 className="text-red-800">Кентавър</h1>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url('hero2.jpg')` }}
        className="z-0 h-[70vh] lg:h-[100vh] w-full bg-cover bg-center"
      ></div>
    </div>
  );
}
