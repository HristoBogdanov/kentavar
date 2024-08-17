import Link from "next/link";

export default function ContactUsSection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div
        style={{ backgroundImage: `url('hero1.jpg')` }}
        className="z-0 h-full min-h-[500px] w-full bg-cover bg-center"
      ></div>
      <div className="flex flex-col justify-center gap-10 px-6 py-14 md:p-14 lg:p-20 xl:p-40 bg-black text-white">
        <div className="flex flex-col ">
          <h1 className="uppercase text-5xl font-black">
            <span className="text-red-800">свържи се </span>с нас.
          </h1>
          <h1 className="uppercase text-5xl font-black">
            стани <span className="text-red-800">шампион.</span>
          </h1>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link
          href="/contacts"
          className="py-4 px-8 text-xl bg-red-800 text-white border-2 border-red-800 w-fit transition-all hover:text-red-800 duration-500 hover:bg-white"
        >
          КОНТАКТИ
        </Link>
      </div>
    </div>
  );
}
