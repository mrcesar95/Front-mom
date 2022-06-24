import React from "react";
import * as ReactDOMClient from "react-dom/client";
import About from "./pages/AboutUs";
// import App from "./pages/App";
// import Foundations from "./pages/Foundations"
// import About from "./pages/AboutUs";
import App from "./pages/App";


const rootElement = document.getElementById("root")

const root = ReactDOMClient.createRoot(rootElement);
root.render(<About/>)