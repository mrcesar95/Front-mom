import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../images/logo.png"
import User from "../images/user.png"
import Button from '@material-ui/core/Button';
import "../styles/AppNav.css"
import styles from "./styles/Nav.styles.js"


function AppNav() {
    const clases = styles();
    return (
        <div>
            <AppBar position="fixed" className={clases.Nav}>
                <img src={Logo} className="logo" />
                <img src={User} className="User" />
                <Toolbar>
                    <div className={clases.boton1}>
                        <Button >
                            About us
                        </Button>
                    </div>
                    <div className={clases.boton2}>
                        <Button >
                            Foundations
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default AppNav