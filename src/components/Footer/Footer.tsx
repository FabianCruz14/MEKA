import styles from './Footer.module.scss'
import logo from "../../assets/webp/favicon.webp"
import { Link } from 'react-router-dom';

function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <img src={logo} alt="Logo MekaIND" className={styles.logo}/>
                
                <nav className={styles.navFooter}>
                    <Link className={styles.link} to="/" >Nosotros</Link>
                    <Link className={styles.link} to='/products'>Productos</Link>
                    <Link className={styles.link} to="/contact" >Contacto</Link>
                </nav>
            </div>
            <h3>  Todos los derechos reservados Meka Industrial {currentYear} © </h3>

        </footer>
    )
}

export default Footer;