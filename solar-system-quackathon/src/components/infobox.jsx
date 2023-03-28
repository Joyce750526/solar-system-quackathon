import "./infobox.css";
import { useState } from "react";

export default function InfoBox() {
  const [activeTab, setActiveTab] = useState("size");

  const handleClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <div className='container'>
      <div className='tab-container'>
        <ul className='tabs'>
          <li onClick={() => handleClick("size")}>Size</li>
          <li onClick={() => handleClick("distance")}>Distance</li>
          <li onClick={() => handleClick("facts")}>Facts</li>
          <li onClick={() => handleClick("state")}>Gas/Solid</li>
          <li onClick={() => handleClick("moons")}>Moons</li>
        </ul>
        <div className='tab-content'>
          <div className={`size ${activeTab === "size" ? "" : "hidden"}`}>
            Size content
          </div>
          <div className={`size ${activeTab === "distance" ? "" : "hidden"}`}>
            Distance content
          </div>
          <div className={`size ${activeTab === "facts" ? "" : "hidden"}`}>
            Facts content
          </div>
          <div className={`size ${activeTab === "state" ? "" : "hidden"}`}>
            Gas/solid content
          </div>
          <div className={`size ${activeTab === "moons" ? "" : "hidden"}`}>
            Moon(s) content
          </div>
        </div>
      </div>
    </div>
  );
}
