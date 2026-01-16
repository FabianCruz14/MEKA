import React from "react";
import { cardMvv } from "../../types";
import styles from "../CardMVV/CardMVV.module.scss"

const CardMVV: React.FC<cardMvv> = ({title, description, urlImg}) => {
    const bgStyle = {
    backgroundImage: {urlImg}
};
    return (
        <div className={styles.cardMvv}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <h5 className={styles.text}>{description}</h5>
            </div>
        </div>
    )
}

export default CardMVV;