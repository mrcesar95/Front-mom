import React from "react";
import AppNav from "../componets/AppNav";
import Back from "../images/backend.jpeg"
import Front from "../images/frontend.jpeg"
import Full from "../images/fullstack.png"
import "../styles/AboutUs.css"
import Footer from "../componets/Footer";
import Redes from "../componets/Redes";

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
            <p className="Text1">UI-UX designer Y Front-End developer</p>
            <h3 className="Name2">Cesar Molina</h3>
            <p className="Text2">Back-End developer</p>
            <h3 className="Name3">Joana Casallas</h3>
            <p className="Text3">Full-Stack developer</p>

            <div className="RED1">
                <Redes></Redes>
            </div>
            <div className="RED2">
                <Redes></Redes>
            </div>
            <div className="RED3">
                <Redes></Redes>
            </div>

            <div>
                <p className="text-front">I chose to be in charge of the frontend<br></br>
                    because I like to have control of the user <br></br>experience.
                    I love the design part and <br></br>making the application graphically.
                </p>
                <p className="text-back">
                    I choose backend because is the<br></br> persistence of the aplicacion and<br></br>
                    the core of the project
                </p>
                <p className="text-full">
                    I choose the Full Stack Role because <br></br> 
                    I think that when you know the complete <br></br> Sprocess of a product,
                    you can get a global perspective of the solutions
                </p>
            </div>

            <div className="FOO">
                <Footer></Footer>
            </div>
        </div>
    )
}
export default About