import React from "react";
import "../styles/Footer.css"
import hol from "../images/logo.png"
import Face from "../images/facebook.png"
import Instagram  from "../images/instagram.png";
import Tw from "../images/tw.png"

const Footer = () => (
    <footer className="footer">
        <img src={hol} className="hol" />

        <div className="Pap">
            <p>ALL RIGHTS RESERVED 2022 Mom-Engine</p>
        </div>
        <div >
        <img src={Face} className="Face" />
        <img src={Instagram} className="Instagram"/>
        <img src={Tw} className="Tw"/>
        </div>
    </footer>
);

export default Footer;