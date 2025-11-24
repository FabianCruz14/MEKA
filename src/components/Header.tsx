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
            <div className={`${styles.headerContent} container`}>
                <div className={styles.logoMarca}>
                    <a href="/"> 
                        <img src={logo} alt="Logo Meka Ind" className={styles.logo} />
                    </a>
                    <h1 className={styles.marca}>Meka</h1>
                </div>


                <nav className={styles.navMain}>
                        <a href="#" className={styles.a}>Nosotros</a>
                        <a href="#" className={styles.a}>Productos</a>
                        <a href="#" className={styles.a}>Contacto</a>
                </nav>
            </div>
        </header>
    )
}




export default Header;



