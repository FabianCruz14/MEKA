import React from "react";
import { Carousel } from "antd";
import styles from './CarouselPump.module.scss'
import { carouselProps } from "../../types";

const CarouselPumps : React.FC <carouselProps> = (props) => (
    <Carousel
        className= {styles.carousel}
        autoplay = {true}
        dots = {false}
        autoplaySpeed= {3000}
        fade = {true} >
            <img src={props.img1} alt="img1"/>
            <img src={props.img2} alt="img2"/>
            <img src={props.img3} alt="img3"/>
            <img src={props.img4} alt="img4"/>
            <img src={props.img5} alt="img5"/>
            <img src={props.img6} alt="img6"/>
            <img src={props.img7} alt="img6"/>
            <img src={props.img8} alt="img6"/>
            <img src={props.img9} alt="img6"/>

    </Carousel>
);

export default CarouselPumps;