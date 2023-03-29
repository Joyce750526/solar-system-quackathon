import { useState } from "react";
import "./planets.css";

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
      <div className='planet' id='saturn'>
        Saturn
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
