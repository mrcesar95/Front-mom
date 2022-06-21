import React from "react";
import * as ReactDOMClient  from "react-dom/client";
import AppNav from "./componets/AppNav";


const rootElement = document.getElementById("root")

const root = ReactDOMClient.createRoot(rootElement);root.render(<AppNav/>)