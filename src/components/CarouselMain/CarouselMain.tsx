import React from "react";
import { Carousel } from "antd";
import styles from './CarouselMain.module.scss';
import { carouselProps } from "../../types";

const CarouselMain : React.FC<carouselProps>  = (props) => (
    <Carousel className={styles.carouselPics} 
        autoplay={{ dotDuration: true }} 
        autoplaySpeed={5000}
        effect="fade"
        fade = {true}
        >
        
            <img src={props.img1} alt="imagen 1" className={styles.carouselPic} />
       

       
            <img src={props.img2} alt="imagen 2"  className={styles.carouselPic} />
        

        
            <img src={props.img3} alt="imagen 3" className={styles.carouselPic} />
        
            <img src={props.img4} alt="imagen 4" className={styles.carouselPic} />
    </Carousel>
);

export default CarouselMain;