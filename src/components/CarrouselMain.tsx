import React from "react";
import { Carousel } from "antd";

const contentStyle : React.CSSProperties = {
    margin : 0,
    width :  'auto',
    height : '40rem',
    textAlign : 'center',
    background: 'red',
}

const CarouselMain : React.FC = () => (
    <Carousel autoplay>
        <div style={contentStyle}>
            <h3 style={contentStyle}>1</h3>
        </div>

        <div style={contentStyle}>
            <h3 style={contentStyle}>2</h3>
        </div>

        <div style={contentStyle}>
            <h3 style={contentStyle}>3</h3>
        </div>


    </Carousel>
);

export default CarouselMain;