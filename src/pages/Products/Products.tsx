import React from "react";
import styles from './Products.module.scss'
import CardDescription from "../../components/CardDescription/CardDescription";
import img from '../../assets/webp/electrofloculacion.webp'

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

            <CardDescription
                title="Plantas tratadoras municipales"
                src={img}
                description="La parte central de esta tecnología como primera 
                etapa de es la electro-floculación"
            />
        </div>

    )
}

export default Products;