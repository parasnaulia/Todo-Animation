import styles from "./Manager.module.css";
import React from 'react';

const Manager = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.first1}>
            In it for the long haul
            </div>
            <div className={styles.second}>
            A task manager you can trust for life
            </div>
            <div className={styles.third}>
            We’ve been building Todoist for 17 years and 191 days. Rest assured that we’ll never sell out to the highest bidder.
            </div>
            <div className={styles.third1}>
                Read More For The Mission
            </div>
        </div>
        <div className={styles.slider}>
            <div className={styles.sliderTrack}>
                <div className={styles.slide}>
                    <img src="../L1.png" alt="slide 1" />
                </div>
                <div className={styles.slide}>
                    <img src="../L2.png" alt="slide 2" />
                </div>
                <div className={styles.slide}>
                    <img src="../L3.png" alt="slide 3" />
                </div>
                <div className={styles.slide}>
                    <img src="../L4.png" alt="slide 4" />
                </div>
                <div className={styles.slide}>
                    <img src="../L5.png" alt="slide 5" />
                </div>
                <div className={styles.slide}>
                    <img src="../L1.png" alt="slide 6" />
                </div>
                <div className={styles.slide}>
                    <img src="../L2.png" alt="slide 7" />
                </div>
                <div className={styles.slide}>
                    <img src="../L4.png" alt="slide 8" />
                    <div>Change Your Lif</div>
                </div>
                <div className={styles.slide}>
                    <img src="../L5.png" alt="slide 9" />
                    <div>Use Our App</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manager;
