import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Redes.css"

function Redes() {
    return (
        <div className="container">
            <div className="GIT">
                <GitHubIcon></GitHubIcon>
            </div>
            <div className="LINKED">
                <LinkedInIcon></LinkedInIcon>
            </div>
        </div>
    )
}
export default Redes