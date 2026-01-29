import React from "react";
import styles from './Contact.module.scss';
import map from '../../assets/webp/mapMeka.png';
import wsp from '../../assets/webp/wspVD.webp'

function Contact () {
    const mapLink = 'https://maps.app.goo.gl/RwSVG6ccPH7bqj9o6';
    const wspLink = 'https://wa.me/message/MXUAMG45PPVBD1';
    const fbLink = 'https://facebook.com'
    return (
        <div className={styles.contact}>
            <div className={styles.contactContainer}>

                <h1>Estar cerca de ti es lo que nos sostiene</h1>
                <p>
                    Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
                </p>

                <a href={mapLink}>
                    <img src={map} alt="mapa de meka" />
                </a>
                <div className={styles.wsp}>
                    <a href={wspLink}>
                        <p>
                            Contactanos via WhatsApp, solo da click y listo
                        </p>
                    </a>
                    <a href={wspLink}>
                        <img src={wsp} alt="wsp logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;