import React from "react";
import AppNav from "../componets/AppNav";
import Back from "../images/backend.jpeg"
import Front from "../images/frontend.jpeg"
import Full from "../images/fullstack.png"
import "../styles/AboutUs.css"
import Footer from "../componets/Footer";

function About() {
    return (
        <div>
            <AppNav></AppNav>
            <div>
                <img src={Front} className="Edisson" />
                <img src={Back} className="Cesar" />
                <img src={Full} className="Joana" />
            </div>
            <h3 className="Name1">Edisson Osorio</h3>
            <p className="Text1">Front-End developer</p>
            <h3 className="Name2">Cesar Molina</h3>
            <p className="Text2">Back-End developer</p>
            <h3 className="Name3">Joana Casallas</h3>
            <p className="Text3">Full-Stack developer</p>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default About