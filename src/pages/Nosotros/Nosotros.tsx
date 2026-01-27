import styles from './Nosotros.module.scss'
import img from '../../assets/webp/us1.webp'
import CardMVV from '../../components/CardMVV/CardMVV';
import bgMision from '../../assets/webp/us3.webp'
import Txt from '../../components/Txt/Txt';

function Nosotros (){
    return (
        <div className={styles.nosotros}>
            <h2>¿Quienes somos?</h2>
            <h1>Líderes en Ingenieria Ambiental y Soluciones del tratamiento del agua</h1>
            <div className={styles.parrafos}>
                <Txt
                title='Nuestra Identidad'
                description='Somos una empresa dedicada al tratamiento de agua residual 
                    y su potabilización, así como a la ejecución de todo tipo de obra pública 
                    y privada. Contamos con un equipo de expertos en ingeniería Química-Ambiental 
                    y metal-mecánica.'
                />
                <Txt
                title='Nuestra Filosofía'
                description='Somos una organización comprometida con el medio ambiente y la conservación 
                    de los recursos naturales. Consideramos que el compromiso con la calidad es un requisito 
                    fundamental para nuestro crecimiento y progreso tecnológico.'
                />

            </div>
            
            <div className={styles.image}>
                <img src={img} alt="nosotros image" />
            </div>

            <div className={styles.cards}>
                <CardMVV
                    title = 'Misión'
                    description='Diseñamos y fabricamos soluciones integrales para 
                    el tratamiento de aguas industriales,
                     municipales y sectores comerciales. Garantizando 
                      la reutilización segura del agua, una operación sostenible y económica.'
                    urlImg={bgMision}
                />
                <CardMVV
                    title = 'visión'
                    description='Aspiramos a ser líderes en innovación y calidad dentro del sector 
                    de tratamiento de aguas residuales en México y Latinoamérica, nos gusta contribuir a un buen medio ambiente
                    y generar futuro sostenible para todos'
                    urlImg={bgMision}
                />
                <CardMVV
                    title = 'valores'
                    description='La innovación, calidad, sostenibilidad, integridad y la flexibilidad
                    son nuestro centro y por el cuál trabajamos día con día, sumado a la atencion al cliente, que es el primer
                     paso en nuestra ruta' 
                    
                urlImg={bgMision}
                />

                
            </div>
        </div>
    )
}

export default Nosotros;


// ¿Quiénes Somos?
// Somos una empresa mexicana integrada por un equipo multidisciplinario de profesionistas con amplia experiencia en Ingeniería Química-Ambiental y el ramo metalmecánico. En Ingeniería Meka Industrial, nos especializamos en ofrecer soluciones integrales para el tratamiento y potabilización del agua, así como en la ejecución de obra pública y privada de alta complejidad.
// Desde nuestra sede en Puebla, servimos a diversos sectores industriales y gubernamentales con un enfoque basado en el rigor técnico y la innovación tecnológica.
// Nuestra Filosofía de Trabajo
// Nuestra cultura organizacional se fundamenta en el compromiso con la calidad total, aplicada rigurosamente a cada uno de nuestros proyectos a través de tres pilares esenciales:
//  * Enfoque al Cliente: Trabajamos con la satisfacción de nuestros clientes como el fin último de cada obra.
//  * Mejora Continua: Mantenemos la optimización de procesos y la actualización técnica como un objetivo prioritario y permanente.
//  * Trabajo en Equipo: Fomentamos el compromiso personal y la formación continua de nuestro personal para asegurar resultados de excelencia.
// Compromiso Ambiental y Calidad
// En Ingeniería Meka Industrial, entendemos que el progreso debe ser sostenible. Por ello, somos una empresa profundamente comprometida con el medio ambiente y la conservación de los recursos naturales.
// Operamos bajo un estricto Sistema de Gestión de Calidad y cumplimos con toda la normativa, tanto voluntaria como obligatoria, que rige nuestro sector. Esto nos permite garantizar no solo la eficiencia operativa, sino también la seguridad jurídica y ambiental de cada proyecto que emprendemos.
// ¿Por qué elegirnos?
//  * Experiencia Comprobada: Contamos con un historial sólido en proyectos de gran escala para clientes como Grupo Modelo, Mexicana de Cobre y diversas desarrolladoras inmobiliarias.
//  * Capacidad Técnica: Expertos en procesos de oxidación avanzada, sistemas de filtración, osmosis inversa y fabricación especializada en acero inoxidable (proceso TIG).
//  * Soluciones de Extremo a Extremo: Desde el diseño y construcción de plantas (PTAR) hasta el mantenimiento y la gestión de trámites ante organismos como CONAGUA.
// ¿Te gustaría que redacte también la sección de "Servicios" detallando cada una de sus especialidades técnicas?