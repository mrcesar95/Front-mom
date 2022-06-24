import React from "react";
import AppNav from "../componets/AppNav";
import Back from "../images/backend.jpeg"
import Front from "../images/frontend.jpeg"
import Full from "../images/fullstack.png"
import "../styles/AboutUs.css"

function About() {
    return(
          <div>
               <AppNav></AppNav>
               <img src={Front} className="edisson"/>
               <img src={Back} className="cesar"/>
               <img src={Full} className="joana"/>
               <h3 className="name1">Edisson Osorio</h3>
               <h3 className="name2">Cesar Molina</h3>
               <h3 className="name3">Joana Casallas</h3>
          </div>
    )
}
export default About