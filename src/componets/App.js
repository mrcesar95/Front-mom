import React from "react"
import { Route, Routes } from "react-router-dom"; 
import Api from "../pages/Api"
import Foundations from "../pages/Foundations"
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Register from "../pages/Register"
import Vendor from "../pages/Vendor"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={<Api/>}></Route>
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
            <Routes>
                <Route path="/register" exact element={<Register/>}></Route>
            </Routes>
            <Routes>
                <Route path="/vendor" exact element={<Vendor/>}></Route>
            </Routes>

        </div>
    )
}
export default App
