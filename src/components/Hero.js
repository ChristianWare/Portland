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
                <h5>
                  I build sematically structured web applications by thinking
                  outside the div.
                </h5>
              </div>
              <div className={styles.buttonContainer}>
                <Link href='#about'>
                  <a className={styles.button1}>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <Cube>
          div
        </Cube>
      </div>
    </header>
  );
}

export default Hero;
