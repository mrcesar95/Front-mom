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
                <img alt="Tijano" src={Tijano} className="tijano" />
            </section>
            <div>
                <h1 className="titulo">Colombian art, created <br></br>by mothers who are<br></br>heads of households</h1>
            </div>
            <Link to="/Vendor" style={{ textDecoration: 'none' }}>
                <Button variant="contained" disableElevation className={clases.BTN}>
                    Become an affiliate
                </Button>
            </Link>
            <h2 className="subtitulo">Recent Products</h2>
            <Slider></Slider>
            <Footer></Footer>
        </div>
    )
}
export default Api