import React, { useState } from 'react';
import styles from './PassWord.module.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const PassWord = () => {
    const [show,setShow]=useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.C}>
        <div className={styles.container}>
            <div>
            <lable className={styles.lable}>Password</lable>

            </div>
            <div className={styles.eye}>
                <div>
                <input className={styles.input} placeholder="Enter Your Password" type="password"/>

                </div>
                <div className={styles.inner} onClick={()=>{setShow(!show)}}>
                   {show===true? <FaEye size={20}/>:<FaEyeSlash size={20} />}
                

                </div>
                </div>
           
            
            
        </div>
    </div>
   
  );
};

export default PassWord;
