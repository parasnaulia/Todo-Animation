// src/components/Loader.js
import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
        <div><img src="../icon-1.png" height={60} width={30}/></div>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
