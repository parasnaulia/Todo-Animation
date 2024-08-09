import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = ({data1,data2}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.C}>
        <div className={styles.container}>
            <div>
            <lable className={styles.lable}>{data1}</lable>

            </div>
            <div><input className={styles.input} placeholder={data2}/></div>
           
            
            
        </div>
    </div>
   
  );
};

export default Input;
