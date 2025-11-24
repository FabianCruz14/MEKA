import React from "react";
import { Carousel } from "antd";
import styles from './CarouselMain.module.scss';

import img1 from '../assets/webp/test1.webp';
import img2 from '../assets/webp/2.webp';
import img3 from '../assets/webp/4.webp';


const contentStyle : React.CSSProperties = {
    margin : 0,
    width :  'auto',
    height : '200rem',
    textAlign : 'center',
    background: 'red',
}

const CarouselMain : React.FC = () => (
    <Carousel autoplay>
        <div style={contentStyle}>
            <img src={img1} alt="imagen 1" className={styles.carouselPics} />
        </div>

        <div style={contentStyle}>
            <img src={img2} alt="imagen 2"  className={styles.carouselPics} />
        </div>

        <div style={contentStyle}>
            <img src={img3} alt="imagen 2" className={styles.carouselPics} />
        </div>


    </Carousel>
);

export default CarouselMain;