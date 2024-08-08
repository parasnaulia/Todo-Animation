import React, { useState } from 'react';
import styles from "./Nav.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineAddBusiness } from "react-icons/md";

const Nav = () => {
  const [tog, setTog] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbztuP53nLYKdOZfqOLPRU0TqrKT_sGCo-vg&s" height={60} width={100} />
        </div>
        <div className={styles.pp}><h3>TaskEasy</h3></div>
      </div>

      <div className={styles.div2}>
        <div>Features</div>
        <div>For Teams</div>
        <div
          onMouseOver={() => setTog(true)}
          onMouseLeave={() => setTog(false)}
        >
          Resources <MdKeyboardArrowDown />
          <div className={`${styles.hoverData} ${tog ? styles.show : styles.hide}`}>
            <div className={styles.hoverInner}>
              <div><MdOutlineAddBusiness style={{ fontSize: "1.5rem", color: "black" }} /></div>
              <div>Integration <p style={{ color: "grey" }}>Connect Todos With Your Another Tool</p></div>
            </div>
            <div className={styles.hoverInner}>
              <div><MdOutlineAddBusiness style={{ fontSize: "1.5rem", color: "black" }} /></div>
              <div>Integration <p style={{ color: "grey" }}>Connect Todos With Your Another Tool</p></div>
            </div>
            <div className={styles.hoverInner}>
              <div><MdOutlineAddBusiness style={{ fontSize: "1.5rem", color: "black" }} /></div>
              <div>Integration <p style={{ color: "grey" }}>Connect Todos With Your Another Tool</p></div>
            </div>
            <div className={styles.hoverInner}>
              <div><MdOutlineAddBusiness style={{ fontSize: "1.5rem", color: "black" }} /></div>
              <div>Integration <p style={{ color: "grey" }}>Connect Todos With Your Another Tool</p></div>
            </div>
          </div>
        </div>
        <div>Pricing</div>
        <div>Login</div>
        <div><button className={styles.btn2}>Start For Free</button></div>
      </div>
    </div>
  )
}

export default Nav;
