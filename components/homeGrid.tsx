import { kazanlakHallMap, ovoshtnikHallMap } from "@/utils/mapsLinks";
import GridImage from "./gridImage";
import GridTextBox from "./gridTextBox";
import { GiBlackBelt } from "react-icons/gi";

export default function HomeGrid() {
  return (
    <div className="w-full flex flex-col bg-black justify-center items-center pt-14 gap-14">
      <div className="flex justify-center items-center gap-6 px-6">
        <h1 className="text-4xl lg:text-6xl uppercase text-white text-center w-fit font-black">
          нашите <span className="text-red-800">тренировки</span>
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <GridTextBox
          title="Таекуондо - начинаещи"
          timetable="понделник, сряда и петък"
          time="17:00 - 18:00"
          price="60 лв. / месец"
          coach="Николай Богданов"
          location='Казанлък, ОДК "Св. Иван Рилски"'
          locationLink={kazanlakHallMap}
          color="#991B1B"
        />
        <GridImage imageUrl="hero1.jpg" />
        <GridTextBox
          title="Таекуондо - напреднали"
          timetable="понделник, сряда и петък"
          time="17:00 - 18:00"
          price="60 лв. / месец"
          coach="Николай Богданов"
          location='Казанлък, ОДК "Св. Иван Рилски"'
          locationLink={kazanlakHallMap}
          color="#991B1B"
        />
        <GridImage imageUrl="hero1.jpg" />
        <GridTextBox
          title="Таекуондо - начинаещи"
          timetable="понделник, сряда и петък"
          time="17:30 - 18:30"
          price="50 лв. / месец"
          coach="Любомир Богданов"
          location="Овощник, Жельо Манолов 58"
          locationLink={ovoshtnikHallMap}
          color="#101010"
        />
        <GridImage imageUrl="hero1.jpg" />
        <GridTextBox
          title="Тае-бо"
          timetable="понделник, сряда и петък"
          time="19:00 - 20:00"
          price="50 лв. / месец"
          coach="Любомир Богданов"
          location="Овощник, Жельо Манолов 58"
          locationLink={ovoshtnikHallMap}
          color="#101010"
        />
        <GridImage imageUrl="hero1.jpg" />
      </div>
    </div>
  );
}
