import React, { useState, useEffect } from 'react';
import styles from './Inner.module.css';

const InnerAnimation = () => {
  const [scrollStage, setScrollStage] = useState(0); // Tracks scroll stage

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine scroll stage based on scroll position
      if (scrollY < windowHeight) {
        setScrollStage(0); // Simple
      } else if (scrollY >= windowHeight && scrollY < 2 * windowHeight) {
        setScrollStage(1); // Customize
      } else {
        setScrollStage(2); // Advanced
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container1}>
      <div className={styles.left}>
        {scrollStage === 0 && <div>Simple Content on Left</div>}
        {scrollStage === 1 && <div>Customize Content on Left</div>}
        {scrollStage === 2 && <div>Advanced Content on Left</div>}
      </div>
      <div className={styles.middle}>
        <div className={styles.line}>
          <div className={scrollStage >= 0 ? styles.fill : ''}></div>
          <div className={scrollStage >= 1 ? styles.fill : ''}></div>
          <div className={scrollStage >= 2 ? styles.fill : ''}></div>
        </div>
      </div>
      <div className={styles.right}>
        {scrollStage === 0 && <div>Simple Content on Right</div>}
        {scrollStage === 1 && <div>Customize Content on Right</div>}
        {scrollStage === 2 && <div>Advanced Content on Right</div>}
      </div>
    </div>
  );
};

export default InnerAnimation;
