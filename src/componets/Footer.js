import React from "react";
import "../styles/Footer.css"
import hol from "../images/logo.png"
import Face from "../images/facebook.png"
import Instagram from "../images/instagram.png";
import Tw from "../images/tw.png"
import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="footer">
        <Link to="/">
            <img src={hol} className="hol" />
        </Link>
        <div className="Pap">
            <p>ALL RIGHTS RESERVED 2022 Mom-Engine</p>
        </div>
        <div >
            <a href="https://www.facebook.com/"><img src={Face} className="Face" /></a>
            <a href="https://www.instagram.com/"><img src={Instagram} className="Instagram" /></a>
            <a href="https://twitter.com/"><img src={Tw} className="Tw" /></a>
        </div>
    </footer>
);

export default Footer;