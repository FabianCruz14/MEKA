import { useState } from "react";
import '../styles/header.css'
import '../styles/globales.css'
import logo from "../assets/img/mekaInc.png"
import nosotros from "../nosotros/Nosotros"

function Header () {
    // adding a useState to handler the hamburger nav
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className="header">
            <div className=" header-content">
                <img src={logo} alt="logo Meka" className="logo" />

                <nav className="nav-main">
                    <a href="#" className="a-nosotros">Nosotros</a>
                    <a href="#" className="a-nosotros">Productos</a>
                    <a href="#" className="a-nosotros">Contacto</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;



