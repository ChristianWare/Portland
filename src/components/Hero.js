import React from "react";
import styles from "../../styles/Hero.module.css";
import Link from "next/link";
import Cube from "./Cube";

function Hero() {
  return (
    <header id='#home' className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroLeftWrapper}>
          <h1 className={styles.heroName}>Hello, My Name is Chris.</h1>
          <div className={styles.heroTitle}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleItem}>
                <p>
                  I build sematically structured websites by thinking outside
                  the div.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                <Link href='/'>
                  <a className={styles.button1}>Learn More</a>
                </Link>
                <Link href='/'>
                  <a className={styles.button2}>Contact Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <Cube />
      </div>
    </header>
  );
}

export default Hero;
