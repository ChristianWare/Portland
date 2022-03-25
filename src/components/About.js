import styles from "../../styles/About.module.css";
import Cube from "../components/Cubes/Cube";
import { slideLeft, slideRight } from "../components/utils/Animation";
import { motion } from 'framer-motion'
import { useScroll } from './utils/useScroll'


function About() {
  const [element, controls] = useScroll();

  return (
    <article id='about' className={styles.aContainer} ref={element}>
      <motion.div
        animate={controls}
        variants={slideLeft}
        transition={{ delay: 0.1, stiffness: 300 }}
        className={styles.aLeft}
      >
        <div className={styles.cubeContainer}>
          <Cube>About</Cube>
        </div>
      </motion.div>

      <motion.div
        animate={controls}
        variants={slideRight}
        transition={{ delay: 0.1, stiffness: 300 }}
        className={styles.aRight}
      >
        <h3 className={styles.heading} lang='en'>
          01. <br /> <br />I am a Web Developer who specializes in building web
          applications with Next JS and React.
        </h3>
        <p className={styles.copy} lang='en'>
          Because of my background in design, and finance, I understand the
          aesthetic and business side to any project. While websites have to
          make good impressions on their visitors, they should also motivate
          them to action.
          <br />
          <br />I am looking for an opportunity to apply these principles in a
          role as a Front End Developer.
        </p>
      </motion.div>
    </article>
  );
}

export default About;
