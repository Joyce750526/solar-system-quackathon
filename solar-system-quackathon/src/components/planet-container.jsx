/** THIS IS JUST FOR TESTING DURING DEVELOPEMENT.
 * BUT COULD BE ALSO USED IN PRODUCTION IF WE SO CHOOSE.
 */

import Mercury from "../components/planets/mercury";
import Venus from "../components/planets/venus";
import Earth from "../components/planets/earth";
import Mars from "../components/planets/mars";
import Jupiter from "../components/planets/jupiter";
import Saturn from "../components/planets/saturn";
import Uranus from "../components/planets/uranus";
import Neptune from "../components/planets/neptune";
import "./planet-container.css"

export default function PlanetContainer({ postId }) {
  return (
    <div className='planet-container'>
      <div className={postId === "1" ? "hidden" : ""}>
        <Mercury />
      </div>
      <div className={postId === "2" ? "hidden" : ""}>
        <Venus />
      </div>
      <div className={postId === "3" ? "hidden" : ""}>
        <Earth />
      </div>
      <div className={postId === "4" ? "hidden" : ""}>
        <Mars />
      </div>
      <div className={postId === "5" ? "hidden" : ""}>
        <Jupiter />
      </div>
      <div className={postId === "6" ? "hidden" : ""}>
        <Saturn />
      </div>
      <div className={postId === "7" ? "hidden" : ""}>
        <Uranus />
      </div>
      <div className={postId === "8" ? "hidden" : ""}>
        <Neptune />
      </div>
    </div>
  );
}
