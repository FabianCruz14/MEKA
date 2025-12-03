import PictureMain from "../components/PictureMain";
import CarouselMain from "../components/CarrouselMain";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from './Home.module.scss'

function Home (){
    return (
        <div className={styles.main}>
                <PictureMain/>      

                <h4>Empresa 100% comprometida con el medio ambiente</h4>

                <div className={styles.nosotros}>
                    
                    <div className={styles.carouselDesc}>
                        <CarouselMain/>
                        <div className={styles.description}>
                            <p >
                                En un mundo donde el agua es un recurso cada vez más escaso, Meka 
                                responde a esta emergencia con sus:
                            </p>  
                                    <span>
                                        Plantas Tratadoras de Aguas Residuales
                                        </span>
                                <p>
                                     Diseñadas para enfrentar los desafíos actuales ante la contaminación y 
                                    sostenibilidad.
                                    </p> 
                        </div>
                    </div>
                    <div className={styles.extend}>
                            <p>
                                Potabilización, bombeo y desmineralización con tiempos de tratamiento 
                                menores a una hora
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