import SlideInFromRight from "./animations/slideInFromRight";
import { GiBlackBelt } from "react-icons/gi";

interface Props {
  imagePath: string;
  text: string;
  list: string[];
}

export default function HistoryReverseList({ imagePath, text, list }: Props) {
  return (
    <SlideInFromRight classes="w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full bg-softBlack h-full flex flex-col justify-center items-center border-l-8 border-red-800 p-10 lg:p-20">
        <p className="text-white text-2xl lg:text-3xl font-bold pb-10">
          {text}
        </p>
        <ul className="flex flex-col gap-4 text-white text-lg lg:text-xl 2xl:text-2xl">
          {list.map((fact, i) => (
            <li className="flex items-center gap-3 w-full" key={i}>
              <GiBlackBelt className="min-w-6 min-h-6" />
              <p>{fact}</p>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-full h-full aspect-video bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      ></div>
    </SlideInFromRight>
  );
}
