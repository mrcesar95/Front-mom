import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "../pages/Api"
import Foundations from "../pages/Foundations"
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Register from "../pages/Register"
import Vendor from "../pages/Vendor"
import { Login } from "../pages/Login copy";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { storageKeys } from "../hooks/useLocalStorage.enum";

function App() {
    const [isAuthenticated] = useLocalStorage(storageKeys.autorized.description, false);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {!isAuthenticated && (
                        <Route path="/login-function" exact element={<Login />} />
                    )}
                    <Route path="/" exact element={<Api />} />
                    <Route path="/foundations" exact element={<Foundations />} />
                    <Route path="/aboutus" exact element={<AboutUs />} />
                    <Route path="/product" exact element={<Product />} />
                    <Route path="/register" exact element={<Register />} />
                    <Route path="/vendor" exact element={<Vendor />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;