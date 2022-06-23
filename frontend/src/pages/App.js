import React from "react";
import AppNav from "../componets/AppNav";
// import Footer from "../componets/Footer";
import "../styles/App.css"
import Tijano from "../images/tijano.png"

function App() {
    return (
        <div>
            <AppNav></AppNav>
            <section className="contend">
                <img src={Tijano} className="tijano"></img>
            </section>
            <div>
                <h1 className="titulo">Colombian art, created <br></br>by mothers who are<br></br>heads of households</h1>
            </div>
        </div>
    )
}
export default App