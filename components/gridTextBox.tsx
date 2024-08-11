import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdPlace } from "react-icons/md";

interface Props {
  title: string;
  timetable: string;
  time: string;
  price: string;
  coach: string;
  location: string;
  locationLink: string;
  color: string;
}

export default function GridTextBox({
  title,
  timetable,
  time,
  price,
  coach,
  location,
  locationLink,
  color,
}: Props) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-[500px] w-full p-6 text-white flex items-center"
    >
      <div className="flex flex-col w-full justify-start gap-2">
        <h2 className="uppercase font-bold pb-6 text-2xl lg:text-3xl">
          {title}
        </h2>
        <div className="flex text-xl items-center gap-3">
          <FaCalendarCheck />
          <p>{timetable}</p>
        </div>
        <div className="flex text-xl items-center gap-3">
          <FaClock />
          <p>{time}</p>
        </div>
        <div className="flex text-xl items-center gap-3">
          <IoIosPricetag />
          <p>{price}</p>
        </div>
        <div className="flex text-xl items-center gap-3">
          <IoPerson />
          <p>{coach}</p>
        </div>
        <div className="relative flex text-xl items-center gap-3">
          <Link
            className="hover:underline transition-all duration-500"
            href={locationLink}
            target="__blank"
          >
            <MdPlace />
          </Link>
          <Link
            className="hover:underline transition-all duration-500"
            href={locationLink}
            target="__blank"
          >
            {location}
          </Link>
          <Link
            className="absolute -bottom-5 left-7 hover:underline text-sm transition-all duration-500"
            href={locationLink}
            target="__blank"
          >
            (виж на карта)
          </Link>
        </div>
      </div>
    </div>
  );
}
