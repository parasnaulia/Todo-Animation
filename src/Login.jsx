import React from 'react';
import styles from "./LoginMain.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Input from './Input';
import PassWord from './PassWord';
import Video from './Video';

const Login = () => {
  return (
    <>
    <div className={styles.h1}>
       <div className={styles.div1}>
        <div><img src="../icon-1.png" height={30} width={30}/></div>
        <div><img src="../text2.png" height={28} width={100}/></div>
       </div>
       <div className={styles.div1}></div>
      
    </div>
    <div className={styles.sign}>
     <div className={styles.signInner}> 
      <div className={styles.form}>
        <div className={styles.signUp}>Sign Up</div>
        <div className={styles.google}> 
          <div className={styles.googlenner}>
            <div><FcGoogle size={20} /></div>
            <div className={styles.text}>Continue With Google</div>
          </div>
          <div className={styles.googlenner}>  <div><FaFacebook size={20} color='blue' /></div>
          <div className={styles.text}>Continue With Facebook</div></div>
          <div className={styles.googlenner}>  <div><FaApple size={20} /></div>
          <div className={styles.text}>Continue With Apple</div></div>
        </div>
        <div className={styles.input}>
          <div><Input data1="Email" data2="Enter Your email...."/></div>
          <div><PassWord/></div>
          <div className={styles.btnC}><button className={styles.btn} onClick={()=>{console.log("HEllo")}}>Sign Up with Email</button></div>
          <div className={styles.continue}>By continuing with Google, Apple, or Email, you agree to Todoist’s <span className={styles.borderedtext}>Terms of Service</span> and <span className={styles.borderedtext}>Privacy Policy</span>.</div>
        </div>
        <div className={styles.already}><div>Already signed up? <span className={styles.borderedtext}>Go to login</span></div></div>

      </div>
      <div className={styles.video}>
        <Video/>

      </div>
     </div>
  
    </div>
    </>
  )
}

export default Login
