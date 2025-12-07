import styles from './Footer.module.scss'
import logo from "../assets/webp/favicon.webp"
import { Link } from 'react-router-dom';
import wsp from '../assets/webp/wspVD.webp';

function Footer () {
    const currentYear = new Date().getFullYear();
    const wspLink = 'https://wa.me/message/MXUAMG45PPVBD1';
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoMarca}>
                        <a href="/"> 
                            <img src={logo} alt="Logo Meka Ind" className={styles.logo} />
                            {/* <span>Meka</span> */}
                        </a>
                </div>
                
                <div className={styles.marcaFooter}>
                    <h2>Meka</h2>

                    <nav className={styles.navFooter}>
                        <Link className={styles.link} to="/" >Nosotros</Link>
                        <Link className={styles.link} to='/products'>Productos</Link>
                        <Link className={styles.link} to="/contact" >Contacto</Link>
                    </nav>
                </div>

                <a href={wspLink} className={styles.wsp}>
                    <img src={wsp} alt="Contacto Whatsapp" />
                </a>

            </div>
            <h3>  Todos los derechos reservados Meka Industrial {currentYear} © </h3>

        </footer>
    )
}

export default Footer;