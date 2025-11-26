import styles from './Footer.module.scss'
import logo from "../assets/webp/favicon.webp"

function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <img src={logo} alt="Logo MekaIND" className={styles.logo}/>
                
                <nav className={styles.navFooter}>
                    <a href="#">Nosotros</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                </nav>
            </div>
            <h3>  Todos los derechos reservados Meka Industrial {currentYear} © </h3>

        </footer>
    )
}

export default Footer;