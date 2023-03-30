import { useState } from "react";
import "./planets.css";


// THIS HAS BEEN REPLICATED IN THE PLANETS FOLDER ALL AS SEPERATE COMPONENTS - THIS FILE SHOULD NOT BE USED

export default function Planets() {
  // const [count, setCount] = useState(0)

  return (
    <section>
      <div className='planet' id='sun'>
        Sun
      </div>
      <div className='planet' id='mercury'>
        Mercury
      </div>
      <div className='planet' id='venus'>
        Venus
      </div>
      <div className='planet' id='earth'>
        Earth
      </div>
      <div className='planet' id='mars'>
        Mars
      </div>
      <div className='planet' id='jupiter'>
        Jupiter
      </div>
      <div className='planet' id='saturn-container'>
        Saturn
        <div className='planet' id='saturn'>
          <div id='saturn-rings'></div>
          <div id='saturn-hiding'></div>
        </div>
      </div>
      <div className='planet' id='uranus'>
        Uranus
      </div>
      <div className='planet' id='neptune'>
        Neptune
      </div>
    </section>
  );
}
