import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      postId = 1;
    } else if (planet === "venus") {
      setIsVenusClicked(true);
      postId = 2;
    }
    navigate(`${planet}/${postId}`);
  };

  return (
    <div>
      <button type='button' onClick={() => handleClick("mercury")}>
        Mercury
      </button>

      <button type='button' onClick={() => handleClick("venus")}>
        Venus
      </button>
    </div>
  );
}
