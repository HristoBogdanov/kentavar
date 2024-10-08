import {
  kazanlakHallMap,
  kazanlakMapsApi,
  ovoshtnikHallMap,
  ovoshtnikMapsApi,
} from "@/utils/mapsLinks";
import Heading from "./heading";
import TrainingCentre from "./trainingCentre";

export default function TrainingCentresSction() {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-20">
      <Heading classes="pb-0 lg:pb-10" firstTitle="нашите" secondTitle="зали" />
      <TrainingCentre
        title="Зала в гр. Казанлък"
        addressText='ОДК "Св Иван Рилски" ж.к. Васил Левски 40А, 6103 Казанлък'
        addressIframeLink={kazanlakMapsApi}
        addressMapsLink={kazanlakHallMap}
        image="/Зала-град-Казанлък.jpg"
      />
      <TrainingCentre
        title="Зала в с. Овощник"
        addressText="ул. Жельо Манолов 58, 6138 Овощник"
        addressIframeLink={ovoshtnikMapsApi}
        addressMapsLink={ovoshtnikHallMap}
        image="/Зала-село-Овощник.jpg"
      />
    </div>
  );
}
