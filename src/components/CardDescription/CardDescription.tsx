import React from "react";
import { Card } from "antd";
import { CardProps } from "../../types";
import styles from './Card.module.scss';

const { Meta } = Card;

const CardDescription : React.FC<CardProps> = (props) => (
    <Card 
        hoverable
        className={styles.card}
        style={{
            backgroundColor: '#c4e2acff'
        }}
        cover = {
            <img
                draggable = {false}
                alt = {props.title}
                src = {props.src}
            />
        }
    >
        <Meta className={styles.meta} title = {props.title} description = {props.description}/>
    </Card>
);

export default CardDescription;