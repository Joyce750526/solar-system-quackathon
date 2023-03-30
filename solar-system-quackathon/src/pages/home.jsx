import InfoBox from "../components/infobox";
import Header from "../components/header";
import Footer from "../components/footer";
import Placeholder from "../components/placeholder-planets";
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
      <Header />
      <Placeholder />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <Footer />
    </>
  );
}
