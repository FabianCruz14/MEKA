import React from "react";
import styles from './Products.module.scss'

function Products () {
    return (
        <div className= {styles.products}>
            <h1>Plantas de Tramiento  de Aguas Residuales</h1>

            <p>
                El Proceso de tratamiento de agua por oxidación avanzada, 
                ofrece una solución que le permitirá cumplir con las normas
                 vigentes para descarga de aguas residuales 
                
            </p>
            <blockquote>
                 (NOM-001, NOM-002 e inclusive la NOM-003) 

            </blockquote>
        </div>
    )
}

export default Products;