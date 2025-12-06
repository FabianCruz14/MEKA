import React from "react";
import styles from './Products.module.scss'
import CardDescription from "../../components/CardDescription/CardDescription";
import CarouselMain from "../../components/CarouselMain/CarouselMain";

import img1 from '../../assets/webp/electrofloculacion.webp'
import img2 from '../../assets/webp/elk.webp'
import img3 from '../../assets/webp/test4.webp'
import img4 from '../../assets/webp/oxd.webp'

function Products () {
    return (
        <div className= {styles.products}>
            <h1>Plantas de Tramiento  de Aguas Residuales</h1>

            <p>
                El proceso de tratamiento de agua por 
                oxidación avanzada ofrece una solución que le 
                permitirá cumplir con las normas vigentes para descarga 
                de aguas residuales 
            </p>
            <blockquote>
                 (NOM-001, NOM-002 e inclusive la NOM-003) 
            </blockquote>
            
            <div className={styles.procesos}>
                <CarouselMain
                    title="imagenes de la electrofloculacion y oxidacion"
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    img4={img4}
                />
            </div>

            <CardDescription
                title="Plantas tratadoras municipales"
                src={img1}
                description="La parte central de esta tecnología como primera 
                etapa de es la electro-floculación"
            />
        </div>

    )
}

export default Products;