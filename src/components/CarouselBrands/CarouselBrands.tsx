import React from "react";
import { Carousel } from "antd";
import styles from './CarouselBrands.module.scss'
import { carouselProps } from "../../types";

const CarouselBrands : React.FC <carouselProps> = (props) => (
    <Carousel
        className= {styles.carousel}
        autoplay = {true}
        dots = {false}
        autoplaySpeed= {3000}
        fade = {true} >
            <img src={props.img1} alt="img1" className={styles.brand} />
            <img src={props.img2} alt="img2" className={styles.brand} />
            <img src={props.img3} alt="img3" className={styles.brand} />
            <img src={props.img4} alt="img4" className={styles.brand} />
            <img src={props.img5} alt="img5" className={styles.brand} />
            <img src={props.img6} alt="img6" className={styles.brand} />
    </Carousel>
);

export default CarouselBrands;