import "./earth-info.css"
import InfoBox from "../components/infobox"

export default function EarthInfo() {
  
    return (
        <div className='earth-info'>
            <div className="earth-container">
                <div className='planets' id='earth'>
                    Earth
                </div>
            </div>
            <InfoBox />
            <div className='planet-name-container'>
                <div className='planet-name'>
                    &nbsp;
                </div>
                <div className='planet-name'>
                Mercury
                </div>
                <div className='planet-name'>
                Venus
                </div>
                <div className='planet-name'>
                Mars
                </div>
                <div className='planet-name'>
                Jupiter
                </div>
                <div className='planet-name'>
                Saturn
                </div>
                <div className='planet-name'>
                Uranus
                </div>
                <div className='planet-name'>
                Neptune
                </div>
            </div>
            <div className="additional-planet-container">
                <div>
                    &nbsp;
                </div>
                <div className='planets' id='mercury'>
                </div>
                <div className='planets' id='venus'>
                </div>
                <div className='planets' id='mars'>
                </div>
                <div className='planets' id='jupiter'>
                </div>
                <div className='planets' id='saturn-container'>
                    <div id='saturn'>
                        <div id='saturn-rings'></div>
                        <div id='saturn-hiding'></div>
                    </div>
                </div>
                <div className='planets' id='uranus'>
                </div>
                <div className='planets' id='neptune'>
                </div>
            </div>
        </div>
    );
}
  