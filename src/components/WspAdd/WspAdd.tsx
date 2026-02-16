import styles from './WspAdd.module.scss'
import wsp from '../../assets/webp/wspVD.webp'

function WspAdd (){
    const wspLink = 'https://api.whatsapp.com/send?phone=%2B522221835161';
    return(
        <div className={styles.wsp}>
                    <a href={wspLink}>
                        <p>
                            Contactanos via WhatsApp, solo da click y listo
                        </p>
                    </a>
                    <a href={wspLink}>
                        <img src={wsp} alt="wsp logo" />
                    </a>
        </div>
    )
}

export default WspAdd;