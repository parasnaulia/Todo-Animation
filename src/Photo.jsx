import React from 'react'
import styles from "./Photo.module.css"

const Photo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
                
                <img src="../lat.png" className={styles.img} height={700} width={1200}/>
           

        </div>
      
    </div>
  )
}

export default Photo
