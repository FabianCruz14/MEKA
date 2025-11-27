import { useState } from "react";
import styles from './Header.module.scss'
import '../styles/main.scss'
import logo from "../assets/webp/mekaInc.webp"

function Header () {
        // adding a useState to handler the hamburger nav
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            {/* <div className='container'> */}
            <div className={styles.headerContent}>
                
                <div className={styles.logoBurger}>

                    <div className={styles.logoMarca}>
                        <a href="/"> 
                            <img src={logo} alt="Logo Meka Ind" className={styles.logo} />
                            <span>Meka</span>
                        </a>
                    </div>

                    {/* in this nav, we add a interactive classNames, that is, we add some JSX code lines to reach this  */}
                    {/* <nav className= {styles.navMain} > */}
                    {/* BOTÓN HAMBURGUESA (solo móvil) */}
                        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                            ☰
                        </button>

                </div>
                    <nav className= {styles.navMain}>
                            <a href="#" className={styles.a} >Nosotros</a>
                            <a href="#" className={styles.a} >Productos</a>
                            <a href="#" className={styles.a} >Contacto</a>
                            
                    </nav>

                    <nav className= {`${styles.menuMobile} ${menuOpen ? styles.active : styles.hidden}`}>
                        {/* we use a condicional ? to show or hide a hamburger menu */}
                        {/* <div className={`${menuOpen ? styles.mobileMenu : ''}`}>
                            </div> */}
                        <a href="#" className={styles.a} >Nosotros</a>
                        <a href="#" className={styles.a} >Productos</a>
                        <a href="#" className={styles.a} >Contacto</a>                        
                    </nav>


            </div>
        </header>
    )
}




export default Header;



