import { useNavigate } from "react-router-dom";
import Mercury from "./planets/mercury";
import Venus from "./planets/venus";
import Earth from "../components/planets/earth";
import Mars from "../components/planets/mars";
import Jupiter from "../components/planets/jupiter";
import Saturn from "../components/planets/saturn";
import Uranus from "../components/planets/uranus";
import Neptune from "../components/planets/neptune";

export default function Placeholder() {
  const navigate = useNavigate();

  const handleClick = async planet => {
    let postId;

    if (planet === "mercury") {
      postId = 1;
    } else if (planet === "venus") {
      postId = 2;
    } else if (planet === "earth") {
      postId = 3;
    } else if (planet === "mars") {
      postId = 4;
    } else if (planet === "jupiter") {
      postId = 5;
    } else if (planet === "saturn") {
      postId = 6;
    } else if (planet === "uranus") {
      postId = 7;
    } else if (planet === "neptune") {
      postId = 8;
    }
    navigate(`${planet}/${postId}`);
  };

  return (
    <div>
      <div className='single-planet' onClick={() => handleClick("mercury")}>
        <Mercury />
      </div>
      <div className='single-planet' onClick={() => handleClick("venus")}>
        <Venus />
      </div>
      <div className='single-planet' onClick={() => handleClick("earth")}>
        <Earth />
      </div>
      <div className='single-planet' onClick={() => handleClick("mars")}>
        <Mars />
      </div>
      <div className='single-planet' onClick={() => handleClick("jupiter")}>
        <Jupiter />
      </div>
      <div className='single-planet' onClick={() => handleClick("saturn")}>
        <Saturn />
      </div>
      <div className='single-planet' onClick={() => handleClick("uranus")}>
        <Uranus />
      </div>
      <div className='single-planet' onClick={() => handleClick("neptune")}>
        <Neptune />
      </div>
    </div>
  );
}
