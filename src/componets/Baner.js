import React from "react";
import "../styles/Baner.css"
import Mom from "../images/Moms.jpg"

function Baner() {
    return (
        <div className="CONTA">
            <img src={Mom} className="momy"></img>
            <h1 className="TITU">Let's work together</h1>
        </div>
    )
}
export default Baner