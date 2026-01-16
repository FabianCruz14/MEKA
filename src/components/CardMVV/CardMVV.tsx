import React from "react";
import { cardMvv } from "../../types";
import styles from "../CardMVV/CardMVV.module.scss"

const CardMVV: React.FC<cardMvv> = ({title, description, urlImg}) => {
    const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${urlImg})`
    };
    return (
        <div className={styles.cardMvv}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.text}>{description}</p>
            </div>
        </div>
    )
}

export default CardMVV;