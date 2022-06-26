import React from "react";
import AppNav from "../componets/AppNav";
import Back from "../images/backend.jpeg"
import Front from "../images/frontend.jpeg"
import Full from "../images/fullstack.png"
import "../styles/AboutUs.css"

function About() {
    return (
        <div>
            <AppNav></AppNav>
            <div>
                <img src={Front} className="edisson" />
                <img src={Back} className="cesar" />
                <img src={Full} className="joana" />
            </div>
            <h3 className="name1">Edisson Osorio</h3>
               <p className="text1">Front-End developer</p>
            <h3 className="name2">Cesar Molina</h3>
               <p className="text2">Back-End developer</p>
            <h3 className="name3">Joana Casallas</h3>
                <p className="text3">Full-Stack developer</p>

            <h2 className="subti">OUR VISION</h2>

            <p className="parrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, 
            vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, 
            ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor 
            mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit
            iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut.
            </p>
            </div>
    )
}
export default About