// everything is coming from saturn.css except what is mentioned below
import "./saturn.css";
// some of the size, margin, display, border-radius and position is coming from home.css
import "../../pages/home.css"

export default function Saturn() {
    return (
        <>
            <div className='planet' id='saturn-container'>
                Saturn
                <div className='planet' id='saturn'>
                    <div id='saturn-rings'></div>
                    <div id='saturn-hiding'></div>
                </div>
            </div>
        </>
    )
}

