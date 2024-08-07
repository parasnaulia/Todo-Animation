import React from 'react'
import styles from "./Download.module.css"
import { FaDownload } from "react-icons/fa";

const Download = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.h1}>Gain calmness and clarity with the world’s most beloved productivity app</div>
            <div className={styles.h2}>
            374000+ ★★★★★ reviews on Google Play and App Store
            </div>
            <div className={styles.btn} >Start For Free</div>
            <div className={styles.btn2}> <FaDownload style={{paddingLeft:"1rem"}} />Download Now</div>
         

        </div>
      
    </div>
  )
}

export default Download
