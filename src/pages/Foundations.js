import React from "react";
import AppNav from "../componets/AppNav"
import "../styles/Foundations.css"
import Cubo from "../images/cubito.gif"
import Cristal from "../images/cubitoCristal.gif"
import Button from '@material-ui/core/Button';
import styles from "./styles/Foundations.styles"
import Footer from "../componets/Footer";
import Slider from "../componets/SliderFoundations";
import ReactPlayer from "react-player";
import Fle3 from "../images/flecha.png"
import Fle4 from "../images/flecha.png"


function Foundations() {
    const clases = styles()
    return (
        <div>
            <AppNav>
            </AppNav>
            <img src={Cubo} className="cubo" />
            <img src={Cristal} className="cristal" />
            <div>
                <h1 className="titulo">Proyecta Studio<br></br>Design SAS</h1>
                <p className="parrafo">We design and innovate with furniture<br></br>and accessories</p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=3045958532">
                <Button variant="contained" disableElevation className={clases.BTN}>
                    WhatsApp
                </Button></a>
            <hr className="linea" />
            <h2 className="sub">GET INSPIRED WITH OUR PRODUCTS</h2>

            <img src={Fle3} className="Fle3"></img>
            <img src={Fle4} className="Fle4"></img>
            <div className="Slider">
            <Slider></Slider>
            </div>

            <div className="Video">
                <ReactPlayer
                    url={require("../videos/video.mp4")}
                    controls
                    playing
                    volume="0.8"
                    loop
                />
            </div>
            <div className="fo">
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Foundations
