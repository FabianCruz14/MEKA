import { useState } from "react";
import styles from './Header.module.scss'
import '../styles/main.scss'
import logo from "../assets/img/mekaInc.png"
import { HeaderProps } from "../types";
import { Content } from "antd/es/layout/layout";


function Header () {
        // adding a useState to handler the hamburger nav
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            {/* <div className='container'> */}
            <div className={`${styles.headerContent} container`}>
                <div className={styles.logoMarca}>
                    <a href="/"> 
                        <img src={logo} alt="Logo Meka Ind" className={styles.logo} />
                        <span>Meka</span>
                    </a>
                </div>


                <nav className={styles.navMain}>
                        <a href="#" className={styles.a}>Nosotros</a>
                        <a href="#" className={styles.a}>Productos</a>
                        <a href="#" className={styles.a}>Contacto</a>
                </nav>
                {/* BOTÓN HAMBURGUESA (solo móvil) */}
                <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                >
                ☰
                </button>

                {/* MENU MOVIL */}
                <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuMobileOpen : ''}`}>
                    <a href="#inicio" onClick={()=> setMenuOpen(false)}> Inicio</a>
                    <a href="#Productos" onClick={()=> setMenuOpen(false)}> Productos</a>
                    <a href="#contacto" onClick={()=> setMenuOpen(false)}> Contacto</a>

                </div>



            </div>
        </header>
    )
}




export default Header;



