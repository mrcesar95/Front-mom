import React from "react";
import AppNav from "../componets/AppNav";
// import Footer from "../componets/Footer";
import "../styles/App.css"
import Tijano from "../images/tijano.png"
import Button from '@material-ui/core/Button';
import styles from './styles/App.styles'
import Frutero from '../images/frutero.png'
import Fique from '../images/fique.png'
import { Route } from "react-router-dom"
import AboutUs from "./AboutUs"

function App() {
    const clases = styles();
    return (
        <div>
            {/* <Route path="/AboutUs">
                <AboutUs />
            </Route> */}


            <AppNav></AppNav>
            <section className="contend">
                <img src={Tijano} className="tijano"></img>
            </section>
            <div>
                <h1 className="titulo">Colombian art, created <br></br>by mothers who are<br></br>heads of households</h1>
            </div>
            <Button variant="contained" color="primary" disableElevation className={clases.BTN}>
                Become an affiliate
            </Button>
            <h2 className="subtitulo">Recent Products</h2>
            <img src={Frutero} className="frutero" />
            <img src={Fique} className="fique" />
        </div>
    )
}
export default App