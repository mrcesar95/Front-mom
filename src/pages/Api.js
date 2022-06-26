import React from "react";
import AppNav from "../componets/AppNav";
import Footer from "../componets/Footer";
import "../styles/index.css"
import Tijano from "../images/tijano.png"
import Button from '@material-ui/core/Button';
import styles from './styles/App.styles'
import Slider from "../componets/Slider";
import { Link } from "react-router-dom";

function Api() {
    const clases = styles();
    return (
        <div>
            <AppNav></AppNav>
            <section className="contend">
                <img src={Tijano} className="tijano"></img>
            </section>
            <div>
                <h1 className="titulo">Colombian art, created <br></br>by mothers who are<br></br>heads of households</h1>
            </div>
            <Link to="/LoginVendor">
            <Button variant="contained" color="primary" disableElevation className={clases.BTN}>
                Become an affiliate
            </Button>
            </Link>
            <h2 className="subtitulo">Recent Products</h2>
            {/* <img src={Frutero} className="frutero" />
            <img src={Fique} className="fique" /> */}

            <Slider></Slider>

            <Footer></Footer>
        </div>
    )
}
export default Api