import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./componets/App";
import { BrowserRouter } from 'react-router-dom';
// import About from "./pages/AboutUs";
// import App from "./pages/App";
// import Foundations from "./pages/Foundations"
// import About from "./pages/AboutUs";
// import Api from "./pages/Api";


const rootElement = document.getElementById("root")

const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <BrowserRouter>
    <AppRegister />
       <App />
</BrowserRouter>,
)