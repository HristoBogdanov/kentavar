import { kazanlakHallMap, ovoshtnikHallMap } from "@/utils/mapsLinks";
import GridImage from "./gridImage";
import GridTextBox from "./gridTextBox";
import { GiBlackBelt } from "react-icons/gi";
import SlideInFromLeft from "./animations/slideInFromLeft";
import SlideInFromRight from "./animations/slideInFromRight";
import SlideInFromBottom from "./animations/slideInFromBottom";
import Heading from "./heading";

export default function HomeGrid() {
  return (
    <div className="w-full flex flex-col bg-black justify-center items-center">
      <Heading
        firstTitle="нашите"
        secondTitle="тренировки"
        classes="pt-10 lg:pt-20 lg:pb-20"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <SlideInFromLeft classes="flex w-full flex-col md:flex-row col-span-2">
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
          <GridImage imageUrl="presi.jpg" />
        </SlideInFromLeft>
        <SlideInFromRight classes="flex w-full flex-col md:flex-row col-span-2">
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
          <GridImage imageUrl="lubo4.jpg" />
        </SlideInFromRight>
        <SlideInFromLeft classes="flex w-full flex-col md:flex-row col-span-2">
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
          <GridImage imageUrl="marina_presi.jpg" />
        </SlideInFromLeft>
        <SlideInFromRight classes="flex w-full flex-col md:flex-row col-span-2">
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
          <GridImage imageUrl="tae-bo.jpg" />
        </SlideInFromRight>
      </div>
    </div>
  );
}
