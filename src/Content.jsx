import React from 'react';
import styles from "./Content.module.css"
import { useNavigate } from 'react-router-dom';

const Content = () => {
 const navigate=useNavigate()
  return (
    <div className={styles.container}>
        <div> <div className={styles.heading}>Organize your work and life, finally.</div> </div>
        <div> <div className={styles.para}>Simplify life for both you and your team. The world’s #1 task manager and to-do list app.</div></div>
        <div className={styles.btn} onClick={()=>{
          navigate("login")
         
        }}> <button className={styles.btn1} >Start For Free</button></div>
      
    </div>
  )
}

export default Content
