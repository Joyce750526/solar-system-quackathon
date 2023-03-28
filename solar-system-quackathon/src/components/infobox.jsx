import "./infobox.css";
import { useState } from "react";

export default function InfoBox() {
  /** The default active tab is "Size", hence the useState value */
  const [activeTab, setActiveTab] = useState("size");

  /** handler function to change the current active tab */
  const handleClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <div className='container'>
      <div className='tab-container'>
        <ul className='tabs'>
          <li
            onClick={() => handleClick("size")}
            className={activeTab === "size" ? "bg-1" : ""}
          >
            Size
          </li>
          <li
            onClick={() => handleClick("distance")}
            className={activeTab === "distance" ? "bg-2" : ""}
          >
            Distance
          </li>
          <li
            onClick={() => handleClick("facts")}
            className={activeTab === "facts" ? "bg-2" : ""}
          >
            Facts
          </li>
          <li
            onClick={() => handleClick("state")}
            className={activeTab === "state" ? "bg-2" : ""}
          >
            Gas/Solid
          </li>
          <li
            onClick={() => handleClick("moons")}
            className={activeTab === "moons" ? "bg-2" : ""}
          >
            Moons
          </li>
        </ul>
      </div>
      <div className='tab-content'>
        <div
          className={`size ${activeTab === "size" ? "fade-in-text" : "hidden"}`}
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
        </div>
      </div>
    </div>
  );
}
