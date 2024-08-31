import { GiBlackBelt } from "react-icons/gi";
import RevealDivBottomToTopDelay from "./animations/revealFromTopDelay";

interface Props {
  name: string;
  desc: string[];
  imagePath: string;
  delay: number;
}

export default function coachCard({ name, desc, imagePath, delay }: Props) {
  return (
    <RevealDivBottomToTopDelay
      delay={delay}
      className="w-full flex flex-col justify-center items-center border-t-8 border-b-8 border-red-800 bg-softBlack"
    >
      <div
        className="w-full aspect-[4/5] bg-cover bg-top"
        style={{ backgroundImage: `url('${imagePath}')` }}
      ></div>
      <div className="flex flex-col w-full max-sm:h-fit max-xl:350px h-[500px] max-xl:justify-center 2xl:h-[350px] 2xl:justify-center p-6 gap-10 items-center text-white">
        <h3 className="text-3xl font-black">{name}</h3>
        <ul className="text-xl flex flex-col gap-3">
          {desc.map((fact, i) => (
            <li className="flex items-center gap-3 w-full" key={i}>
              <GiBlackBelt className="min-w-6 min-h-6" />
              <p>{fact}</p>
            </li>
          ))}
        </ul>
      </div>
    </RevealDivBottomToTopDelay>
  );
}
