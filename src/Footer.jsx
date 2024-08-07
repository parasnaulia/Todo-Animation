import React from 'react'
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.icon}>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbztuP53nLYKdOZfqOLPRU0TqrKT_sGCo-vg&s" height={30} width={50}/></div>
                <div className={styles.logo}>TaskEasy</div>
            </div>
           
            <div className={styles.icon1}>Join millions of people who organize work and life with Todoist.</div>
        </div>
        <div className={styles.inner}>
            <div className={styles.pp}>Features</div>
            <div>How it works</div>
            <div>For Teams</div>
            <div>Templetes</div>
            <div>Templetes</div>
        </div>
        <div className={styles.inner}>
        <div className={styles.pp}>Resources</div>
            <div>Download Apps</div>
            <div>Help Center</div>
            <div>Productivity Methods</div>
            <div>Intrigations</div>
            <div>Developer Api</div>
            <div>Status</div>
        </div>
        <div className={styles.inner}>
        <div className={styles.pp}>Company</div>
            <div>About Us</div>
            <div>Career</div>
            <div>Inspiration Hub</div>
            <div>Press</div>
            <div>Twist</div>
        </div>
        <div className={styles.social}>
            <div><FaTwitter /></div>
            <div><FaFacebookF /></div>
            <div><FaYoutube /></div>
            <div><FaInstagram /></div>

        </div>
      
    </div>
  )
}

export default Footer
