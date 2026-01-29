import React from "react";
import styles from './Products.module.scss'
import CardDescription from "../../components/CardDescription/CardDescription";
import CarouselMain from "../../components/CarouselMain/CarouselMain";
import Txt from "../../components/Txt/Txt";

import img1 from '../../assets/webp/electrofloculacion.webp'
import img2 from '../../assets/webp/elk.webp'
import img3 from '../../assets/webp/oxd.webp'
import img4 from '../../assets/webp/test4.webp'

import card1 from '../../assets/webp/c.webp'
import card2 from '../../assets/webp/4.webp'
import card3 from '../../assets/webp/3.webp'

function Products () {
    return (
        <div className= {styles.products}>

                <h1>Plantas de Tramiento de Aguas Residuales (PTAR)</h1>

                <p>
                    El proceso de tratamiento de aguas residuales por medio de
                    oxidación avanzada ofrece una solución que le 
                    permitirá cumplir con las normas vigentes para descarga 
                    de aguas residuales 
                </p>
                <p>
                    En Meka diseñamos, fabricamos e instalamos las PTAR a la medida
                    y para el ramo que necesite (hotelero, municipal, industiel, etc...)
                </p>
                <blockquote>
                    (NOM-001, NOM-002 e inclusive la NOM-003) 
                </blockquote>
                
                <div className={styles.procesos}>
                    <p>La parte central de esta tecnología es la electro-floculación,
                        seguida por una oxidación con ozono y 
                        OH- disminuyendo la turbiedad, los sólidos suspendidos, bacterias 
                        y solutos de alto peso molecular
                        </p>
                    <CarouselMain
                        title="imagenes de la electrofloculacion y oxidacion"
                        img1={img1}
                        img2={img2}
                        img3={img3}
                        img4={img4}
                    />

            </div>
            
            <div className={styles.trajes}>
                <h2>Diseñamos la PTAR que
                    mas se ajuste a sus necesidades 
                </h2>



                <div className={styles.cards}>


                    <CardDescription
                        title="PTAR Industriales"
                        src={card1}
                        description="Diseñadas para tratar los efluentes de fábricas, complejos manufactureros y parques industriales. 
                        Nuestras plantas cumplen con las normas ambientales más exigentes."
                    />

                    <CardDescription
                        title="PTAR Municipales"
                        src={card2}
                        description="Sistemas integrales para el tratamiento de aguas 
                        residuales urbanas, desde pequeñas localidades hasta ciudades medianas."
                    />

                    <CardDescription
                        title="PTAR para Rastros"
                        src={card3}
                        description="Soluciones diseñadas para los desafíos únicos de rastros, 
                        mataderos, granjas y procesamiento de alimentos. "
                    />

                </div>
                    <Txt 
                    title="Consumibles"
                    description="Somos distribuidores de las mejores marcas en productos para el mantenimiento de  tus 
                    plantas tratadoras de agua"
                    />
            </div>



        </div>
    )
}

export default Products;