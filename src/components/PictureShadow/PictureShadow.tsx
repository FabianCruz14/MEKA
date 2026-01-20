import React from "react";
import styles from '../PictureShadow/PictureShadow.module.scss'
import { pictureShadow } from "../../types";

const PictureShadow: React.FC<pictureShadow> = ({imgUrl, percent}) => {
    return (
        <div>
            <img src={imgUrl} alt="imagen de fondo" />
        </div>
    )
}

export default PictureShadow;