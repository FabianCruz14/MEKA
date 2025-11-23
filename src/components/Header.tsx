import { useState } from "react";
import '../styles/header.css'
import logo from "../assets/img/mekaInc.png"
import nosotros from "../nosotros/Nosotros"

function Header () {
    // adding a useState to handler the hamburger nav
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <a href={logo} className="logo">{logo}</a>
                    {/* <img src={logo} alt="logo MEKA" className="logo"/>
                     */}
                </div>
                <nav className={`nav-main ${menuOpen ? 'open' : ''}`}>
                    <a href= "#">Nosotros</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                </nav>

                <button 
                    className="menu-toggle"
                    onClick={()=> setMenuOpen(!menuOpen)}
                    aria-label="Abrir Menu"
                >
                        ☰
                </button>
            </div>
        </header>
    );
}

export default Header;



