import "./infobox.css";
import { useState } from "react";
import Axios from "axios";

export default function InfoBox() {
  /** The default active tab is "Size", hence the useState value */
  const [activeTab, setActiveTab] = useState("size");
  const [moons, setMoons] = useState("");

  /** handler function to change the current active tab */
  const handleClick = async tabName => {
    setActiveTab(tabName);
    try {
      const response = await Axios.get("http://localhost:3000/moon");
      console.log("data:", response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className='planet-facts'>
      <div className='container'>
        <div className='tab-container'>
          <ul className='tabs'>
            <li
              onClick={() => handleClick("size")}
              className={activeTab === "size" ? "bg text-black" : ""}
            >
              Size
            </li>
            <li
              onClick={() => handleClick("distance")}
              className={activeTab === "distance" ? "bg" : ""}
            >
              Distance
            </li>
            <li
              onClick={() => handleClick("facts")}
              className={activeTab === "facts" ? "bg" : ""}
            >
              Facts
            </li>
            <li
              onClick={() => handleClick("state")}
              className={activeTab === "state" ? "bg" : ""}
            >
              Gas/Solid
            </li>
            <li
              onClick={() => handleClick("moons")}
              className={activeTab === "moons" ? "bg" : ""}
            >
              Moons
            </li>
          </ul>
        </div>
        <div className='tab-content'>
          <div
            className={`size ${
              activeTab === "size" ? "fade-in-text" : "hidden"
            }`}
          >
            Size content
          </div>
          <div
            className={`size ${
              activeTab === "distance" ? "fade-in-text" : "hidden"
            }`}
          >
            Distance content
          </div>
          <div
            className={`size ${
              activeTab === "facts" ? "fade-in-text" : "hidden"
            }`}
          >
            Facts content
          </div>
          <div
            className={`size ${
              activeTab === "state" ? "fade-in-text" : "hidden"
            }`}
          >
            Gas/solid content
          </div>
          <div
            className={`size ${
              activeTab === "moons" ? "fade-in-text" : "hidden"
            }`}
          >
            Moon(s) content
            {moons}
          </div>
        </div>
      </div>
    </div>
  );
}
