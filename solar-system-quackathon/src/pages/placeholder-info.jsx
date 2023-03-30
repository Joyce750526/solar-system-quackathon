import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

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
    fetchData();
  }, []);

  return (
    <>
      <div>Hi, I'm {planet}</div>
      <p>postId: {postId}</p>
      <p>planet: {planet}</p>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <p>{item.body}</p>
          </div>
        ))}
    </>
  );
}
