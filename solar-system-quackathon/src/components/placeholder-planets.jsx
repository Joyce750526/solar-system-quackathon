import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import PlaceholderInfo from "../pages/placeholder-info";

export const DataContext = createContext(null);

export default function Placeholder({ children }) {
  const [isMercuryClicked, setIsMercuryClicked] = useState(false);
  const [isVenusClicked, setIsVenusClicked] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleClick = async planet => {
    let url;
    let postId;

    if (planet === "mercury") {
      setIsMercuryClicked(true);
      url = "https://jsonplaceholder.typicode.com/comments?postId=1";
      postId = 1;
    } else if (planet === "venus") {
      setIsVenusClicked(true);
      url = "https://jsonplaceholder.typicode.com/comments?postId=2";
      postId = 2;
    }
    try {
      const response = await Axios.get(url);
      const data = await response.data;
      setData(data);
      console.log("data state:", data);
      navigate(`${planet}/${postId}`);
    } catch (error) {
      console.log("API error:", error);
    }
  };

  return (
    <DataContext.Provider value={data}>
      <div>
        <button type='button' onClick={() => handleClick("mercury")}>
          Mercury
        </button>

        <button type='button' onClick={() => handleClick("venus")}>
          Venus
        </button>
        {children}
        {/* {isMercuryClicked && data === null && <div>Loading...</div>}
        {isVenusClicked && data === null && <div>Loading...</div>}
        {data && (isMercuryClicked || isVenusClicked) && (
          <PlaceholderInfo planet={isMercuryClicked ? "mercury" : "venus"} />
        )} */}
      </div>
    </DataContext.Provider>
  );
}
