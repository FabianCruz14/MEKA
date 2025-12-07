import PictureMain from "../../components/PictureMain/PictureMain";
import CarouselMain from "../../components/CarouselMain/CarouselMain";
import styles from './Home.module.scss'

import img1 from  '../../assets/webp/pta3.webp';
import img2 from '../../assets/webp/cover1.webp';
import img3 from '../../assets/webp/4.webp';
import img4 from '../../assets/webp/c.webp';


function Home (){
    return (
        <div className={styles.main}>
                <PictureMain/>      

                <h4>Empresa 100% comprometida con el medio ambiente</h4>

                <div className={styles.nosotros}>
                    
                    <p >
                        En un mundo donde el agua es un recurso cada vez más escaso, Meka 
                        responde a esta emergencia con sus:
                    </p>  
                    <div className={styles.carouselDesc}>
                        <CarouselMain
                            title="Fotos de la empresa y sus trabajos"
                            img1={img1}
                            img2={img2}
                            img3={img3}
                            img4={img4}
                            
                            />
                        <div className={styles.description}>
                            <span>
                                Plantas Tratadoras de Aguas Residuales
                            </span>

                            <p className={styles.hiddenMobile}>
                                En un mundo donde el agua es un recurso cada vez más escaso, Meka 
                                responde a esta emergencia con sus:
                            </p> 

                            <p>
                                Diseñadas para enfrentar los desafíos actuales ante la contaminación y 
                                sostenibilidad.
                            </p> 
                        </div>

                    </div>
                    <div className={styles.extend}>
                            <p>
                                Potabilización, bombeo y desmineralización con tiempos de tratamiento 
                                menores a una hora.
                            </p>
                            <p>
                            Nuestros procesos, libres de químicos aseguran el cumplimiento de las normas NOM-001, 
                            002 y 003, ofreciendo agua limpia y segura para riego, reúso o descarga. 
                            {/* Meka es la elección inteligente para quienes buscan hacer una diferencia 
                            real en la gestión del agua.
                            Juntos, podemos cerrar el ciclo del agua de manera sostenible. */}
                            </p>
                    </div>
                    
                    

                </div>
        </div>
    )
}

export default Home;