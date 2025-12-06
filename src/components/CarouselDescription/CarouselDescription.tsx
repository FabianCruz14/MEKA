import React from "react";
import { Carousel } from "antd";
import { carouselProps } from "../../types";

import img1 from '../../assets/webp/electrofloculacion.webp'
import img2 from '../../assets/webp/pta.webp'
import img3 from '../../assets/webp/test4.webp'

const CarouselDescription : React.FC<carouselProps> = (props) =>(
    <Carousel 
        autoplay={{ dotDuration : true}}
        autoplaySpeed={5000}
        effect="fade"
        fade={true}
        >
            <img src={img1} alt={props.title} />
            <img src={img2} alt={props.title} />
            <img src={img3} alt={props.title} />
    </Carousel>
)

export default CarouselDescription;