import React from "react";
import LogoId from "../../img/logoid.png";
import "./style.css";
const CustomHeader = () => {
    return (
        <React.Fragment>
            <div className="header">
                <img src={LogoId} alt="Logo"/>
                <h3>Gestión Estratégica</h3>
            </div>
        </React.Fragment>
    )
}

export default CustomHeader;