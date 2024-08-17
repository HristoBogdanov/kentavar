import { facebookGroupLink } from "@/utils/socialMediaLinks";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { kazanlakHallMap, ovoshtnikHallMap } from "@/utils/mapsLinks";

export default function Footer() {
  return (
    <footer className="w-full bg-softBlack">
      <div className="container mx-auto text-white gap-y-20 max-md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white">
        <div className="flex flex-col lg:items-center uppercase">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-black">виж още</h2>
            <ul className="text-xl flex flex-col gap-2">
              <Link
                className="hover:text-red-800 transition-all duration-500"
                href="/"
              >
                начало
              </Link>
              <Link
                className="hover:text-red-800 transition-all duration-500"
                href="/about-us"
              >
                за нас
              </Link>
              <Link
                className="hover:text-red-800 transition-all duration-500"
                href="news"
              >
                новини
              </Link>
              <Link
                className="hover:text-red-800 transition-all duration-500"
                href="contacts"
              >
                контакти
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-black uppercase">контакти</h2>
            <ul className="text-xl flex flex-col gap-2">
              <Link
                href="tel: 0899920506"
                className="flex text-xl items-center gap-3 hover:text-red-800 transition-all duration-500"
                target="_blank"
              >
                <FaPhone />
                0899920506
              </Link>
              <Link
                href="tel: 0897814122"
                className="flex text-xl items-center gap-3 hover:text-red-800 transition-all duration-500"
                target="_blank"
              >
                <FaPhone />
                0897814122
              </Link>
              <Link
                href="mailto: nkentavar@abv.bg"
                className="flex text-xl items-center gap-3 hover:text-red-800 transition-all duration-500"
                target="_blank"
              >
                <IoMail />
                nkentavar@abv.bg
              </Link>
              <Link
                href={facebookGroupLink}
                className="flex text-xl items-center gap-3 hover:text-red-800 transition-all duration-500"
                target="_blank"
              >
                <FaFacebook />
                Кентавър
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-black uppercase">треньори</h2>
            <ul className="text-xl flex flex-col gap-2">
              <li>Николай Богданов</li>
              <li>Любомир Богданов</li>
              <li>Христо Богданов</li>
              <li>Любомир Събчев</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-black uppercase">зали</h2>
            <ul className="text-xl flex flex-col gap-2">
              <Link
                href={kazanlakHallMap}
                className="flex text-xl items-center gap-3 hover:text-red-800 transition-all duration-500"
                target="_blank"
              >
                <MdPlace />
                {`Казанлък, ОДК "Св. Иван Рилски"`}
              </Link>
              <Link
                href={ovoshtnikHallMap}
                className="flex text-xl items-center gap-3 hover:text-red-800 transition-all duration-500"
                target="_blank"
              >
                <MdPlace />
                {`Овощник, Жельо Манолов 58`}
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-md:gap-6 max-md:px-6 text-center justify-center container mx-auto md:justify-between items-center py-10 text-xl text-white">
        <p>© taekwondokentavar.bg. Всички права запазени</p>
        <p>Developed by Hristo Bogdanov</p>
      </div>
    </footer>
  );
}
