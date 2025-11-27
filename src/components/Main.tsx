import React from "react";
import styles from "./Main.module.scss"
import CarouselMain from "./CarrouselMain";
import mainBg from '../assets/webp/maq3.webp';

function Main (){
    return (
        <div className={styles.main}>
            
            <div className={styles.overlay}>
                <div className={styles.mainContent}>
                    <h1>Meka Ind</h1>
                    <h3>Soluciones para el tratamiento del agua</h3>
                    <span>Puebla. Mx</span>
                </div>
            </div>
            {/* <div className={styles.carousel}>
                <CarouselMain/>
            </div> */}
        </div>

    )
}

export default Main;