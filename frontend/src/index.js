import React from "react";
import * as ReactDOMClient from "react-dom/client";
// import AppNav from "./componets/AppNav";
// import Footer from "./componets/Footer";
// import Login from "./pages/Login";
// import Foundations from "./pages/Foundations";
import Product from "./pages/Product";

const rootElement = document.getElementById("root")

const root = ReactDOMClient.createRoot(rootElement);
root.render(<Product/>)