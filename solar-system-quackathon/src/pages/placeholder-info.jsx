import { useEffect, useState } from "react";
import "./placeholder-info.css";
import { useParams } from "react-router-dom";
import Axios from "axios";
import InfoBox from "../components/infobox";
import Mercury from "../components/planets/mercury";
import Venus from "../components/planets/venus";
import Earth from "../components/planets/earth";
import Mars from "../components/planets/mars";
import Jupiter from "../components/planets/jupiter";
import Saturn from "../components/planets/saturn";
import Uranus from "../components/planets/uranus";
import Neptune from "../components/planets/neptune";
import PlanetContainer from "../components/planet-container";

export default function PlaceholderInfo({ planet }) {
  const [data, setData] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = response.data;
      setData(data);
    };
    // console.log("postId:", postId);
    fetchData();
  }, []);

  return (
    <div className='planet-page'>
      <div className='activePlanet'>
        {postId === "1" ? <Mercury /> : null}
        {postId === "2" ? <Venus /> : null}
        {postId === "3" ? <Earth /> : null}
        {postId === "4" ? <Mars /> : null}
        {postId === "5" ? <Jupiter /> : null}
        {postId === "6" ? <Saturn /> : null}
        {postId === "7" ? <Uranus /> : null}
        {postId === "8" ? <Neptune /> : null}
      </div>
      <InfoBox />

      {/** DON'T DELETE BELOW. THIS LOGIC IS NEEDED LATER */}
      {/* <p>Hi, I'm {planet}</p>
      <p>postId: {postId}</p>
      <p>planet: {planet}</p>
      <p>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <p>{item.body}</p>
            </div>
          ))}
      </p> */}
      <PlanetContainer postId={postId} />
    </div>
  );
}
