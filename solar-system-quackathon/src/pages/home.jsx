import InfoBox from "../components/infobox";
import Mercury from "../components/planets/mercury";
import Venus from "../components/planets/venus";
import Earth from "../components/planets/earth";
import Mars from "../components/planets/mars";
import Jupiter from "../components/planets/jupiter";
import Saturn from "../components/planets/saturn";
import Uranus from "../components/planets/uranus";
import Neptune from "../components/planets/neptune";

export default function Home() {
  return (
    <>
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <InfoBox />
    </>
  );
}
