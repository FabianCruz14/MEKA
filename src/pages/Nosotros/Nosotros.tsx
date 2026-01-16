import styles from './Nosotros.module.scss'
import img from '../../assets/webp/us1.webp'

function Nosotros (){
    return (
        <div className={styles.nosotros}>
            <h1>Líderes en Ingenieria Ambiental y Soluciones del tratamiento del agua</h1>
            <h2>¿Quienes somos?</h2>

            <p>Somos una empresa mexicana integrada por un equipo de profesionistas 
                con amplia experiencia en Ingeniería Química-Ambiental y el ramo metalmecánico. 
            </p>
            <p>
                En Ingeniería Meka Industrial, nos especializamos en ofrecer soluciones integrales 
                para el tratamiento y potabilización del agua, así como en la ejecución de obra pública 
                y privada de alta complejidad.
            </p>
            
            <div className={styles.image}>
                <img src={img} alt="nosotros image" />
            </div>

            <div className={styles.card}>
                <div className={styles.overlay}>
                    <h1>Mision</h1>
                    <p>Somos una empresa dedicada al diseño y fabricación de soluciones integrales de 
                        tratamiento de agua para industrias, municipios y sectores comerciales. 
                        Utilizamos tecnología avanzada de oxidación y electro-floculación para 
                        garantizar el cumplimiento normativo, la reutilización segura del agua y 
                        una operación sostenible y económica.</p>
                </div>
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