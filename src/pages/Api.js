import React from "react";
import AppNav from "../componets/AppNav";
import Footer from "../componets/Footer";
import "../styles/index.css"
import Tijano from "../images/tijano.png"
import Button from '@material-ui/core/Button';
import styles from './styles/App.styles'
import { Link } from "react-router-dom";
import Slider from "../componets/Slider";
import Fle from "../images/flecha.png"
import Fle2 from "../images/flecha.png"
import Baner from "../componets/Baner"

function Api() {
    const clases = styles();
    return (
        <div>
            <AppNav></AppNav>
            <section className="contend">
                <img alt="Tijano" src={Tijano} className="tijano" />
            </section>
            <div>
                <h1 className="titulo">Colombian art, created <br></br>by mothers who are<br></br>heads of households</h1>
            </div>
            <Link to="/Vendor" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="inherit" disableElevation className={clases.BTN}>
                    Become an affiliate
                </Button>
            </Link>
            <h2 className="subtitulo">Recent Products</h2>
            <img src={Fle} className="Fle"></img>
            <img src={Fle2} className="Fle2"></img>

            <div>
                <Slider></Slider>
            </div>
            <div className="BA1">
                <Baner></Baner>
            </div>
            <div className="FO1">
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Api