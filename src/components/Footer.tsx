import "../styles/globales.css" 

function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
            <h3 className="nav-footer">
                <a href="#">Nosotros</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </h3>
            <h2>Todos los derechos reservados Meka Industrial © {currentYear}</h2>
            </div>
        </footer>
    )
}

export default Footer;