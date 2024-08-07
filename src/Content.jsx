import React from 'react';
import styles from "./Content.module.css"

const Content = () => {
  return (
    <div className={styles.container}>
        <div> <div className={styles.heading}>Organize your work and life, finally.</div> </div>
        <div> <div className={styles.para}>Simplify life for both you and your team. The world’s #1 task manager and to-do list app.</div></div>
        <div className={styles.btn}> <button className={styles.btn1} >Start For Free</button></div>
      
    </div>
  )
}

export default Content
