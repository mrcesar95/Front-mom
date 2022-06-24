import React from "react";
import AppNav from "../componets/AppNav"
import "../styles/Foundations.css"
import Cubo from "../images/cubito.gif"
import Cristal from "../images/cubitoCristal.gif"
import Button from '@material-ui/core/Button';
import styles from "./styles/Foundations.styles"
import Base from "../images/base.gif"
import Porta from "../images/porta.gif"
import Lapiz from "../images/Portalapiz.gif"


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
            <Button variant="contained"  disableElevation className={clases.BTN}>
                WhatsApp
            </Button>
            <hr className="linea" />
            <h2 className="sub">GET INSPIRED WITH OUR PRODUCTS</h2>
            <img src={Base} className="base" />
            <img src={Porta} className="porta"/>
            <img src={Lapiz} className="lapiz"/>
        </div>
    )
}
export default Foundations
