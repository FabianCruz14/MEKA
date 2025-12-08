import { useState } from "react";
import styles from './Header.module.scss'
import { Link } from "react-router-dom";
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
                    <Link to="/" >Nosotros</Link>
                    <Link to='/products'>Productos</Link>
                    <Link to="/contact" >Contacto</Link>
                </nav>
            

            </div>
                <nav className= {`${styles.menuMobile} ${menuOpen ? styles.active : styles.hidden}`}>
                    <Link to="/" onClick={()=> setMenuOpen(false)}>Nosotros</Link>
                    <Link to='/products' onClick={()=> setMenuOpen(false)}>Productos</Link>
                    <Link to="/contact" onClick={()=> setMenuOpen(false)}>Contacto</Link>                      
                </nav>
        </header>
    )
}




export default Header;



