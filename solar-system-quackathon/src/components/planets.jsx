import { useState } from 'react'
import './planets.css'

export default function Planets() {
  // const [count, setCount] = useState(0)

  return (
    <section>
        <div class="planet" id="sun">Sun</div>
        <div class="planet" id="mercury">Mercury</div>
        <div class="planet" id="venus">Venus</div>
        <div class="planet" id="earth">Earth</div>
        <div class="planet" id="mars">Mars</div>
        <div class="planet" id="jupiter">Jupiter</div>
        <div class="planet" id="saturn">Saturn</div>
        <div class="planet" id="uranus">Uranus</div>
        <div class="planet" id="neptune">Neptune</div>
    </section>
  )
}