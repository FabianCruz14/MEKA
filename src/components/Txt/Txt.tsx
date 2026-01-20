import React from "react";
import styles from '../Txt/Txt.module.scss';
import { txt } from "../../types";

const Txt: React.FC<txt> = (props) => (
    <div className={styles.txt}>
            <h3>    
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
        </div>
)

export default Txt;