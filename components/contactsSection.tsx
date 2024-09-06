import Link from "next/link";
import SlideInFromBottom from "./animations/slideInFromBottom";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { kazanlakHallMap, ovoshtnikHallMap } from "@/utils/mapsLinks";
import { facebookGroupLink } from "@/utils/socialMediaLinks";

export default function ContactsSection() {
  return (
    <SlideInFromBottom classes="w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-fit max-lg:py-20 lg:h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col text-white px-10 lg:px-20 gap-10">
          <div className="w-full flex flex-col">
            <h1 className="font-black uppercase text-6xl">
              <span className="text-red-800">свържи се </span>с нас.
            </h1>
            <h1 className="font-black uppercase text-6xl">
              стани <span className="text-red-800">шампион.</span>
            </h1>
          </div>
          <p className="text-xl text-white">
            СК по таекуондо „Кентавър“ е клуб с дългогодишни традиции и
            множество успехи, където дисциплината, постоянството и стремежът към
            самоусъвършенстване са в основата на нашите тренировки. С опитни
            треньори, които самите са доказани състезатели и носители на
            престижни титли, и с модерна материална база, ние създаваме отлична
            среда за физическо и личностно развитие. Независимо дали сте дете
            или възрастен, амбициозен спортист или просто търсите начин да
            подобрите физическата си форма и дисциплина, ние сме тук, за да ви
            подкрепим. Свържете се с нас и направете първата стъпка към
            здравословен и активен начин на живот!
          </p>
          <div className="flex flex-col max-lg:gap-2 lg:flex-row w-full justify-between">
            <div className="flex flex-col gap-10">
              <ul className="text-xl flex flex-col gap-2">
                <Link
                  href="tel: 0899920506"
                  className="flex items-center gap-3 hover:text-red-800 transition-all duration-500"
                  target="_blank"
                >
                  <FaPhone />
                  0899920506
                </Link>
                <Link
                  href="tel: 0897814122"
                  className="flex items-center gap-3 hover:text-red-800 transition-all duration-500"
                  target="_blank"
                >
                  <FaPhone />
                  0897814122
                </Link>
                <Link
                  href="mailto: nkentavar@abv.bg"
                  className="flex items-center gap-3 hover:text-red-800 transition-all duration-500"
                  target="_blank"
                >
                  <IoMail />
                  nkentavar@abv.bg
                </Link>
                <Link
                  href={facebookGroupLink}
                  className="flex items-center gap-3 hover:text-red-800 transition-all duration-500"
                  target="_blank"
                >
                  <FaFacebook />
                  Кентавър
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <ul className="text-xl flex flex-col gap-2">
                <Link
                  href={kazanlakHallMap}
                  className="flex items-center gap-3 hover:text-red-800 transition-all duration-500"
                  target="_blank"
                >
                  <MdPlace />
                  {`Казанлък, ОДК "Св. Иван Рилски"`}
                </Link>
                <Link
                  href={ovoshtnikHallMap}
                  className="flex items-center gap-3 hover:text-red-800 transition-all duration-500"
                  target="_blank"
                >
                  <MdPlace />
                  {`Овощник, Жельо Манолов 58`}
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 h-[70vh] lg:h-[100vh] w-full flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('Клуб-Кентавър-Turbo-Trophy.jpg')` }}
        />
      </div>
    </SlideInFromBottom>
  );
}
