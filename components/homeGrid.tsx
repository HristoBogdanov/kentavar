import { kazanlakHallMap, ovoshtnikHallMap } from "@/utils/mapsLinks";
import GridImage from "./gridImage";
import GridTextBox from "./gridTextBox";
import SlideInFromLeft from "./animations/slideInFromLeft";
import SlideInFromRight from "./animations/slideInFromRight";
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
            timetable="понделник и сряда / вторник и четвъртък"
            time="18:00 - 19:00"
            coach="Николай Богданов"
            location='Казанлък, ОДК "Св. Иван Рилски"'
            locationLink={kazanlakHallMap}
            color="#991B1B"
          />
          <GridImage imageUrl="Пресияна-Събчева.jpg" />
        </SlideInFromLeft>
        <SlideInFromRight classes="flex w-full flex-col md:flex-row col-span-2">
          <GridTextBox
            title="Таекуондо - напреднали"
            timetable="Всеки делничен ден"
            time="19:00 - 20:00"
            coach="Николай Богданов"
            location='Казанлък, ОДК "Св. Иван Рилски"'
            locationLink={kazanlakHallMap}
            color="#991B1B"
          />
          <GridImage imageUrl="Любомир-Богданов-Dracula-Open.jpg" />
        </SlideInFromRight>
        <SlideInFromLeft classes="flex w-full flex-col md:flex-row col-span-2">
          <GridTextBox
            title="Таекуондо - начинаещи"
            timetable="понделник, сряда и петък"
            time="17:30 - 18:30"
            coach="Любомир Богданов"
            location="Овощник, Жельо Манолов 58"
            locationLink={ovoshtnikHallMap}
            color="#101010"
          />
          <GridImage imageUrl="Марина-и-Пресияна-Събчеви.jpg" />
        </SlideInFromLeft>
        <SlideInFromRight classes="flex w-full flex-col md:flex-row col-span-2">
          <GridTextBox
            title="Тае-бо"
            timetable="понделник, сряда и петък"
            time="19:00 - 20:00"
            coach="Любомир Богданов"
            location="Овощник, Жельо Манолов 58"
            locationLink={ovoshtnikHallMap}
            color="#101010"
          />
          <GridImage imageUrl="Тренировка-Таебо.jpg" />
        </SlideInFromRight>
      </div>
    </div>
  );
}
