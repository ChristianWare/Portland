import styles from "../../styles/Hero.module.css";
import Link from "next/link";
import Cube from "../components/Cubes/Cube";
import { motion } from "framer-motion";
import { fromUp, fromDown } from "../components/utils/Animation";
import { useScroll } from "./utils/useScroll";

function Hero() {
  const [element, controls] = useScroll();

  return (
    <motion.header
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
      id='#home'
      className={styles.hero}
    >
      <div className={styles.heroLeft} ref={element}>
        <motion.div
          animate={controls}
          variants={fromUp}
          transition={{ delay: 0.1, stiffness: 300 }}
          className={styles.heroLeftWrapper}
        >
          <h1 className={styles.heroName}>Hello World. My Name is Chris.</h1>
          <div className={styles.heroTitle}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleItem}>
                <h2 className={styles.copy} lang='en'>
                  I build sematically structured web applications by thinking
                  outside the div.
                </h2>
              </div>
              <div className={styles.buttonContainer}>
                <Link href='#projects'>
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    className={styles.button1}
                  >
                    Projects
                  </motion.a>
                </Link>
                <Link href='#contact'>
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    className={styles.button2}
                  >
                    Contact
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.heroRight}>
        <motion.div
          animate={controls}
          variants={fromDown}
          transition={{ delay: 0.1, stiffness: 300 }}
          className={styles.cubeContainer}
        >
          <Cube>div</Cube>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Hero;
