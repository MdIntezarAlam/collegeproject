import React from "react";
import styles from "./Header.module.css";
import res from '../img/res.jpg'
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's your own</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={res} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
