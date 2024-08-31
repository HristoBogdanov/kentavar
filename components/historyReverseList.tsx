import SlideInFromRight from "./animations/slideInFromRight";
import { GiBlackBelt } from "react-icons/gi";

interface Props {
  imagePath: string;
  text: string;
  list: string[];
}

export default function HistoryReverseList({ imagePath, text, list }: Props) {
  return (
    <SlideInFromRight classes="w-full flex max-lg:flex-col justify-end">
      <div
        className="w-[100vw] max-w-[1300px] aspect-video relative bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      >
        <div className="w-[100vw] lg:w-[50vw] bg-softBlack h-fit absolute top-[100%] lg:right-[50vw] lg:top-1/2 lg:-translate-y-1/2 border-r-8 border-red-800 p-10 lg:p-20">
          <p className="text-white text-2xl lg:text-3xl font-bold pb-10">
            {text}
          </p>
          <ul className="flex flex-col gap-4 text-white text-lg lg:text-xl">
            {list.map((fact, i) => (
              <li className="flex items-center gap-3 w-full" key={i}>
                <GiBlackBelt className="min-w-6 min-h-6" />
                <p>{fact}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[100vw] lg:w-0 bg-softBlack h-fit lg:h-0 border-r-8 border-red-800 p-10 lg:p-0 overflow-hidden">
        <p className="text-white text-2xl lg:text-3xl font-bold pb-10">
          {text}
        </p>
        <ul className="flex flex-col gap-4 text-white text-lg lg:text-xl">
          {list.map((fact, i) => (
            <li className="flex items-center gap-3 w-full" key={i}>
              <GiBlackBelt className="min-w-6 min-h-6" />
              <p>{fact}</p>
            </li>
          ))}
        </ul>
      </div>
    </SlideInFromRight>
  );
}
