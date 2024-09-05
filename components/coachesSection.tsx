import Heading from "./heading";
import CoachCard from "./coachCard";

const nikiDesc = [
  "Треньор с над 20 години опит",
  'Двукратен носител на наградата "Треньор на годината"',
  "Бивш национален състезател",
  "Медалист от Балканско първенство",
];

const luboBDesc = [
  "Двукратен вицеевропейски шампион",
  "5-то място на Световно първенство",
  "5-то място на Европейски олимпийски игри",
  'Двукратен носител на наградата "Спортист на годината"',
];

const icoDesc = [
  "Двукратен европейски шампион",
  "Бронзов медалист от Европейско първенство",
  "Балкански шампион",
  'Носител на награда "Най-добър таекуондист на България за 2019г."',
];

const luboSDesc = [
  "Треньор с богат опит в дисциплини спраинг и пумсе",
  "Дългогодишен състезател с множество успехи",
  "Участник на елитни международни турнири",
];

export default function coachesSection() {
  return (
    <div className="w-full flex flex-col bg-black justify-center items-center gap-14">
      <Heading firstTitle="нашите" secondTitle="треньори" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-6 lg:px-10">
        <CoachCard
          name="Николай Богданов"
          desc={nikiDesc}
          imagePath="/nikiBogdanov.jpg"
          delay={0.25}
        ></CoachCard>
        <CoachCard
          name="Любомир Богданов"
          desc={luboBDesc}
          imagePath="/lubo3.jpg"
          delay={0.5}
        ></CoachCard>
        <CoachCard
          name="Христо Богданов"
          desc={icoDesc}
          imagePath="/lubo3.jpg"
          delay={0.75}
        ></CoachCard>
        <CoachCard
          name="Любомир Събчев"
          desc={luboSDesc}
          imagePath="/lubo_s.jpg"
          delay={1}
        ></CoachCard>
      </div>
    </div>
  );
}
