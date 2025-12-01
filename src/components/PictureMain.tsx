import styles from "./PictureMain.module.scss"

function PictureMain (){
    return (
        <div className={styles.main}>
            
            <div className={styles.overlay}>
                <div className={styles.mainContent}>
                    <h1>Meka Ind</h1>
                    <h3>Soluciones eficientes para el tratamiento del agua</h3>
                    <span>Puebla. Mx</span>
                </div> 
            </div>


        </div>

    )
}

export default PictureMain;