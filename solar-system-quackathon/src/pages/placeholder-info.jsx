import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/placeholder-planets";

export default function PlaceholderInfo({ planet }) {
  const data = useContext(DataContext);
  const { postId } = useParams();

  useEffect(() => {
    console.log("data when rendered:", data);
  }, [data]);

  return (
    <>
      <div>Hi, I'm {planet}</div>
      <p>postId: {postId}</p>
      <p>planet: {planet}</p>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <p>name: {item.name}</p>
          </div>
        ))}
    </>
  );
}
