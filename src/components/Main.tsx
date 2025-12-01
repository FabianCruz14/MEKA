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

            <h4>Empresa comprometida con el medio ambiente</h4>
            <div className={styles.nosotros}>

                <div className={styles.nostrosContainer}>

                    <div className={styles.descriptions}>   
                        <CarouselMain/>
                        <p >
                            En un mundo donde el agua es un recurso cada vez más escaso, Meka 
                            responde a este llamado con maquinaria de tratamiento de agua diseñados 
                            para enfrentar los desafíos actuales de contaminación y sostenibilidad.
                        </p>
                            <div className={styles.description2}>
                                <p>
                                Nuestros procesos, libres de químicos y con tiempos de tratamiento 
                                menores a una hora, aseguran el cumplimiento de las normas NOM-001, 
                                002 y 003, ofreciendo agua limpia y segura para riego, reúso o descarga. 
                                Con capacidades de potabilización, bombeo y desmineralización, Meka es la 
                                elección inteligente para quienes buscan hacer una diferencia real en la gestión del agua.
                                Juntos, podemos cerrar el ciclo del agua de manera sostenible.</p>
                            </div>
                        </div>
            </div>

            <div className={styles.extend}>
                    <p>
                    Nuestros procesos, libres de químicos y con tiempos de tratamiento 
                    menores a una hora, aseguran el cumplimiento de las normas NOM-001, 
                    002 y 003, ofreciendo agua limpia y segura para riego, reúso o descarga. 
                    Con capacidades de potabilización, bombeo y desmineralización, Meka es la 
                    elección inteligente para quienes buscan hacer una diferencia real en la gestión del agua.
                     Juntos, podemos cerrar el ciclo del agua de manera sostenible.</p>
            </div>

            <Footer/>
        </div>
        </div>
    )
}

export default Main;