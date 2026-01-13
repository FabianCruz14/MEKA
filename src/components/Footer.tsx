import styles from './Footer.module.scss'
import logo from "../assets/webp/favicon.webp"
import { Link } from 'react-router-dom';
import wsp from '../assets/webp/wspVD.webp';
import fb from '../assets/webp/fbVde.webp';
import maps from '../assets/webp/location.webp';

function Footer () {
    const currentYear = new Date().getFullYear();
    const wspLink = 'https://wa.me/message/MXUAMG45PPVBD1';
    const fbLink = 'https://facebook.com'
    const mapsLink = 'https://maps.app.goo.gl/pVFA7kFUzS7TSfxy5'
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoMarca}>
                        <a href="/" className={styles.marcaFooter}>
                            <img src={logo} alt="Logo Meka Ind" className={styles.logo} />
                            {/* <span>Meka</span> */}
                        </a>
                        <div className={styles.brand}>
                            <h2>Meka</h2>
                            <span>Ingenieria Industrial</span>
                        </div>
                </div>
                
            </div>
               
            <div className={styles.navWsp}>

                <nav className={styles.navFooter}>
                    <Link className={styles.link} to="/nosotros" >Nosotros</Link>
                    <Link className={styles.link} to='/products'>Productos</Link>
                    <Link className={styles.link} to="/contact" >Contacto</Link>
                </nav>

                <div className={styles.sociales}>

                <a href={wspLink} className={styles.wsp}>
                    <img src={wsp} alt="Contacto Whatsapp" />
                </a>
                <a href={fbLink} className={styles.wsp}>
                    <img src={fb} alt="facebook" />
                </a>
                <a href={mapsLink} className={styles.wsp}>
                    <img src={maps} alt="maps" />
                </a>
                </div>
                
            </div>
            <h3>  Todos los derechos reservados Meka Industrial {currentYear} © </h3>

        </footer>
    )
}

export default Footer;