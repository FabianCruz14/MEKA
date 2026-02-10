import React from "react";
import { CardProps } from "../../types";
import styles from './CardDescription.module.scss';


const CardDescription : React.FC<CardProps> = (props) => (
    <div className={styles.card}>
        <img src={props.src} alt={props.title} />
        <div className={styles.cardDescription}>
            <h3 className={styles.titleCard}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    </div>
);

export default CardDescription;