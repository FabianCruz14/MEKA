import PictureMain from "./PictureMain";
import CarouselMain from "./CarrouselMain";
import Header from "./Header";
import Footer from "./Footer";
import styles from './Main.module.scss'

function Main (){
    return (
        <div className={styles.main}>
                <Header/>
                <PictureMain/>      

                <h4>Empresa 100% comprometida con el medio ambiente</h4>

                <div className={styles.nosotros}>
                    
                    <div className={styles.carouselDesc}>
                        <CarouselMain/>
                        <div className={styles.description}>
                            <p >
                                En un mundo donde el agua es un recurso cada vez más escaso, Meka 
                                responde a este llamado con Plantas Tratadoras de Agua, diseñadas 
                                para enfrentar los desafíos actuales ante la contaminación y 
                                sostenibilidad.
                            </p>  
                            <p>
                                    Potabilización, bombeo y desmineralización con tiempos de tratamiento 
                                    menores a una hora
                            </p>
                            <div className={styles.show}>
                                <p>
                                    Nuestros procesos, libres de químicos, aseguran el cumplimiento de 
                                    las normas NOM-001, NOM-002 y NOM-003 ofreciendo agua limpia y 
                                    segura para riego, reúso o descarga.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.extend}>
                            <p>
                            Nuestros procesos, libres de químicos y con tiempos de tratamiento 
                            menores a una hora, aseguran el cumplimiento de las normas NOM-001, 
                            002 y 003, ofreciendo agua limpia y segura para riego, reúso o descarga. 
                            Meka es la elección inteligente para quienes buscan hacer una diferencia 
                            real en la gestión del agua.
                            Juntos, podemos cerrar el ciclo del agua de manera sostenible.</p>
                    </div>
                    
                    

                </div>
                <Footer/>
        </div>
    )
}

export default Main;