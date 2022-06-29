import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../images/logo.png"
import User from "../images/user.png"
import Button from '@material-ui/core/Button';
import "../styles/AppNav.css"
import styles from "./styles/Nav.styles.js"
import { Link } from "react-router-dom";

function AppNav() {
    const clases = styles();
    return (
        <div>
            <AppBar position="fixed" className={clases.Nav}>
                <Link to="/">
                    <img src={Logo} className="logo" />
                </Link>
                <Link to="/Login">
                    <img src={User} className="User" />
                </Link>
                <Toolbar>
                    <div className={clases.boton1}>
                        <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
                            <Button>About us</Button>
                        </Link>
                    </div>
                    <div className={clases.boton2}>
                        <Link to="/Foundations" style={{ textDecoration: 'none' }}>
                            <Button>Foundations</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default AppNav