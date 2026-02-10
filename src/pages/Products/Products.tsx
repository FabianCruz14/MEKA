import React from "react";
import CarouselPumps from "../../components/CarouselPump/CarouselPump";
import styles from './Products.module.scss'
import CardDescription from "../../components/CardDescription/CardDescription";
import CarouselMain from "../../components/CarouselMain/CarouselMain";
import Txt from "../../components/Txt/Txt";
import CarouselBrands from "../../components/CarouselBrands/CarouselBrands";
import WspAdd from "../../components/WspAdd/WspAdd";

import img1 from '../../assets/webp/electrofloculacion.webp'
import img2 from '../../assets/webp/elk.webp'
import img3 from '../../assets/webp/oxd.webp'
import img4 from '../../assets/webp/test4.webp'

import card1 from '../../assets/webp/c.webp'
import card2 from '../../assets/webp/4.webp'
import card3 from '../../assets/webp/3.webp'

import br1 from '../../assets/webp/brands/br1.webp'
import br2 from '../../assets/webp/brands/br2.webp'
import br3 from '../../assets/webp/brands/br3.webp'
import br4 from '../../assets/webp/brands/br4.webp'
import br5 from '../../assets/webp/brands/br5.webp'
import br6 from '../../assets/webp/brands/br6.webp'
import br7 from '../../assets/webp/brands/br7.webp'
import br8 from '../../assets/webp/brands/br8.webp'
import br9 from '../../assets/webp/brands/br9.webp'
import br10 from '../../assets/webp/brands/br10.webp'
import br11 from '../../assets/webp/brands/br11.webp'
import br12 from '../../assets/webp/brands/br12.webp'
import br13 from '../../assets/webp/brands/br13.webp'
import br14 from '../../assets/webp/brands/br14.webp'
import br15 from '../../assets/webp/brands/br15.webp'
import br16 from '../../assets/webp/brands/br16.webp'
import br17 from '../../assets/webp/brands/br17.webp'
import br18 from '../../assets/webp/brands/br18.webp'
import br19 from '../../assets/webp/brands/br19.webp'
import br20 from '../../assets/webp/brands/br20.webp'
import br21 from '../../assets/webp/brands/br21.webp'
import br22 from '../../assets/webp/brands/br22.webp'
import br23 from '../../assets/webp/brands/br23.webp'

import bmb1 from '../../assets/webp/pumps/1.webp'
import bmb2 from '../../assets/webp/pumps/2.webp'
import bmb3 from '../../assets/webp/pumps/3.webp'
import bmb4 from '../../assets/webp/pumps/4.webp'
import bmb5 from '../../assets/webp/pumps/5.webp'
import bmb6 from '../../assets/webp/pumps/6.webp'
import bmb7 from '../../assets/webp/pumps/7.webp'
import bmb8 from '../../assets/webp/pumps/8.webp'
import bmb9 from '../../assets/webp/pumps/9.webp'
import bmb10 from '../../assets/webp/pumps/10.webp'
import bmb11 from '../../assets/webp/pumps/11.webp'
import bmb12 from '../../assets/webp/pumps/12.webp'
import bmb13 from '../../assets/webp/pumps/13.webp'
import bmb14 from '../../assets/webp/pumps/14.webp'
import bmb15 from '../../assets/webp/pumps/15.webp'
import bmb16 from '../../assets/webp/pumps/16.webp'
import bmb17 from '../../assets/webp/pumps/17.webp'
import bmb18 from '../../assets/webp/pumps/18.webp'





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
                    y para el ramo que necesite (hotelero, municipal, industrial, etc...)
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
                        img4={img4}
                        img1={img1}
                        img2={img2}
                        img3={img3}
                    />

            </div>
            <WspAdd/>
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

                <div className={styles.consumibles}>
                    <Txt
                        title="Consumibles"
                        description="Somos distribuidores de las mejores marcas en productos para el mantenimiento de  tus 
                        plantas tratadoras de agua"
                    />
                    <div className={styles.brands}>

                        <CarouselBrands
                            img1={br1}
                            img2={br2}
                            img3={br3}
                            img4={br4}
                            img5={br5}
                            img6={br6}
                        />
                        <CarouselBrands
                            img1={br7}
                            img2={br8}
                            img3={br9}
                            img4={br10}
                            img5={br11}
                            img6={br12}
                        />
                        <CarouselBrands
                            img1={br13}
                            img2={br14}
                            img3={br15}
                            img4={br16}
                            img5={br17}
                            img6={br18}
                        />
                        <CarouselBrands
                            img1={br19}
                            img2={br20}
                            img3={br21}
                            img4={br22}
                            img5={br23}
                            img6={br15}
                        />
                    </div>

                    <Txt
                        title="Bombas y más..."
                        description="Adquiere los mejores productos a los mejores precios con nosotros, llamanos y consulta las promociones"
                    />
                    <div className={styles.bombas}>
                        <CarouselPumps
                            img1={bmb1}
                            img2={bmb2}
                            img3={bmb3}
                            img4={bmb4}
                            img5={bmb5}
                            img6={bmb6}
                            img7={bmb7}
                            img8={bmb8}
                            img9={bmb9}
                        />
                        <CarouselPumps
                            img1={bmb10}
                            img2={bmb11}
                            img3={bmb12}
                            img4={bmb13}
                            img5={bmb14}
                            img6={bmb15}
                            img7={bmb16}
                            img8={bmb17}
                            img9={bmb18}
                        />
                        
                    </div>
                    <WspAdd/>
                </div>
            </div>



        </div>
    )
}

export default Products;