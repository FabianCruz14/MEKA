import React from "react";
import { Carousel } from "antd";
import styles from './CarouselMain.module.scss';

import img1 from '../assets/webp/test1.webp';
import img2 from '../assets/webp/maq2.webp';
import img3 from '../assets/webp/4.webp';
import img4 from '../assets/webp/a.webp'


const CarouselMain : React.FC = () => (
    <Carousel className={styles.carouselPics} autoplay>
        
            <img src={img1} alt="imagen 1" className={styles.carouselPic} />
       

       
            <img src={img2} alt="imagen 2"  className={styles.carouselPic} />
        

        
            <img src={img3} alt="imagen 2" className={styles.carouselPic} />
        
            <img src={img4} alt="imagen 2" className={styles.carouselPic} />
    </Carousel>
);

export default CarouselMain;