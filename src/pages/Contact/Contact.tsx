import React from "react";
import styles from './Contact.module.scss';
import map from '../../assets/webp/mapMeka.png';

function Contact () {
    const mapLink = 'https://maps.app.goo.gl/RwSVG6ccPH7bqj9o6';
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
            </div>
        </div>
    )
}

export default Contact;