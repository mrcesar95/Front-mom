import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../images/logo.png"


import "./styles/AppNav.css"
import styles from "./styles/Nav.styles.js"


class AppNav extends Component {
    render() {
        const clases = styles();
        return (
            <div>
                <AppBar position="fixed"  className={clases.NavApp}>
                    <Toolbar>
                        <img src={Logo} className="logo" />
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default AppNav