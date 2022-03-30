import styles from "../../styles/Hero.module.css";
import Link from "next/link";
import Cube from "../components/Cubes/Cube";
import { motion } from "framer-motion";
import { fromUp, fromDown } from "../components/utils/Animation";
import { useScroll } from "./utils/useScroll";

function Hero() {
  const [element, controls] = useScroll()

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
                {/* <svg
                  className={styles.svg}
                  viewBox='0 0 100 100'
                  width='250'
                  height='250'
                >
                  <defs>
                    <path
                      id='circle'
                      d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
                    />
                    <animateTransform
                      attributeName='transform'
                      begin='0s'
                      dur='30s'
                      type='rotate'
                      from='0 250 250'
                      to='360 250 250'
                      repeatCount='indefinite'
                    />
                  </defs>
                  <text font-size='11.5' font-family='monospace'>
                    <textPath
                      className={styles.svg}
                      xlinkHref='#circle'
                      font-family='monospace'
                    >
                      You spin me right round, baby.
                    </textPath>
                  </text>
                </svg> */}
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
