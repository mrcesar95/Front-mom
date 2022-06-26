import React from "react"
import { Route, Routes } from "react-router-dom"; 
import Api from "../pages/Api"
import Foundations from "../pages/Foundations"
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/api" exact element={<Api/>}></Route>
            </Routes>
            <Routes>    
                <Route path="/foundations" exact element={<Foundations/>}></Route>
            </Routes>
            <Routes>
                <Route path="/aboutus" exact element={<AboutUs/>}></Route>
            </Routes>
            <Routes>
                <Route path="/product" exact element={<Product/>}> </Route>
            </Routes>

        </div>
    )
}
export default App
