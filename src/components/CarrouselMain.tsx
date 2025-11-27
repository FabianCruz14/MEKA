import React from "react";
import { Carousel } from "antd";
import styles from './CarouselMain.module.scss';

import img1 from '../assets/webp/test1.webp';
import img2 from '../assets/webp/2.webp';
import img3 from '../assets/webp/4.webp';


const CarouselMain : React.FC = () => (
    <Carousel className={styles.carouselPics} autoplay>
        <div className={styles.carouselContainer}>
            <img src={img1} alt="imagen 1" className={styles.carouselPic} />
        </div>

        <div className={styles.carouselPics}>
            <img src={img2} alt="imagen 2"  className={styles.carouselPic} />
        </div>

        <div className={styles.carouselPics}>
            <img src={img3} alt="imagen 2" className={styles.carouselPic} />
        </div>


    </Carousel>
);

export default CarouselMain;