import styles from "../../styles/Hero.module.css";
import Link from "next/link";
import Cube from "../components/Cubes/Cube";

function Hero() {
  return (
    <header id='#home' className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroLeftWrapper}>
          <h1 className={styles.heroName}>Hello World, My Name is Chris.</h1>
          <div className={styles.heroTitle}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleItem}>
                <h2 lang='en'>
                  I build sematically structured web applications by thinking
                  outside the div.
                </h2>
              </div>
              <div className={styles.buttonContainer}>
                <Link href='#projects'>
                  <a className={styles.button1}>Projects</a>
                </Link>
                <Link href='#contact'>
                  <a className={styles.button2}>Contact</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.cubeContainer}>
          <Cube>div</Cube>
        </div>
      </div>
    </header>
  );
}

export default Hero;

