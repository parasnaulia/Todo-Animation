import styles from "./Toolkti.module.css";
import React from 'react'

const Toolkit = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.innerH1}>Explore all TaskEasy has to offer</div>
            <div className={styles.div1O}>
            <div className={styles.div2}>
                <div className={styles.div2O}>
                    <div><img src="../L1.png" height={180} width={180}/></div>
                    <div>Features</div>
                </div>
                <div className={styles.div2O}>
                    <div><img src="../L2.png" height={180} width={180}/></div>
                    <div>Template Gallery</div>
                </div>
                <div className={styles.div2O}>
                    <div><img src="../L3.png" height={180} width={180}/></div>
                    <div>Productivity Quiz</div>
                </div>
                <div className={styles.div2O}>
                    <div><img src="../L4.png"height={180} width={180}/></div>
                    <div>Extension Gallery</div>
                </div>
                <div className={styles.div2O}>
                    <div><img src="../L5.png"height={180} width={180}/></div>
                    <div>Insporation Hub</div>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Toolkit
