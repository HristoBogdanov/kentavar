import GridImage from "./gridImage";
import GridTextBox from "./gridTextBox";

export default function HomeGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <GridImage imageUrl="hero1.jpg" />
      <GridImage imageUrl="hero1.jpg" />
      <GridTextBox
        title="BOXING(ALL LEVELS)"
        content="Nullam id dolor id nibh ultricies vehicula ut id elit sem lacinia quam venenatis vestibulum.Maecenas sed diameget risus varius blandit"
        buttonText="view more"
        buttonLink="/contacts"
      />
      <GridImage imageUrl="hero1.jpg" />
      <GridTextBox
        title="BOXING(ALL LEVELS)"
        content="Nullam id dolor id nibh ultricies vehicula ut id elit sem lacinia quam venenatis vestibulum.Maecenas sed diameget risus varius blandit"
        buttonText="view more"
        buttonLink="/contacts"
      />
      <GridImage imageUrl="hero1.jpg" />
      <GridImage imageUrl="hero1.jpg" />
      <GridImage imageUrl="hero1.jpg" />
    </div>
  );
}
