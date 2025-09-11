import React from "react";
import "./Header.css";
import logo from "../assets/mekaInc.png"

function Header () {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <img src={logo} alt="logo MEKA" className="logo"/>
                    
                </div>
                <nav className="nav-main">
                    <a href="">Nosotros</a>
                    <a href="">Productos</a>
                    <a href="">Contacto</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;



