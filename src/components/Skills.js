import styles from "../../styles/Skills.module.css";
import SkillsCube from "../components/Cubes/SkillsCube";
import { slideLeft } from "../components/utils/Animation";
import { motion } from "framer-motion";
import { useScroll } from "./utils/useScroll";

function Skills() {
  const [element, controls] = useScroll();

  return (
    <section className={styles.sContainer}>
      <div className={styles.sRight} ref={element}>
        <motion.div
          animate={controls}
          variants={slideLeft}
          transition={{ delay: 0.1, stiffness: 300 }}
          id='skills'
          className={styles.cubeContainer}
        >
          <SkillsCube>Skills</SkillsCube>
          <SkillsCube>Skills</SkillsCube>
          <SkillsCube>Skills</SkillsCube>
        </motion.div>
      </div>
      <motion.div
        animate={controls}
        variants={slideLeft}
        transition={{ delay: 0.1, stiffness: 300 }}
        className={styles.sLeft}
      >
        <h3 className={styles.headingIntro} lang='en'>
          03. <br /> <br />
          Skills & Technologies
        </h3>
        <h5 className={styles.heading}>Front End</h5>
        <p className={styles.copy}>HTML, CSS, JavaScript (ES6)</p>
        <h5 className={styles.heading}>Back End</h5>
        <p className={styles.copy}>
          NodeJS/npm, Express, Mongo Atlas, Firebase, Strapi, Contentful
        </p>
        <h5 className={styles.heading}>Libraries & Frame Works</h5>
        <p className={styles.copy}>
          NextJS, React, Styled-Components, SASS, Bootstrap, Material-UI, Framer
          Motion, GSAP, Three.JS
        </p>
        <h5 className={styles.heading}>Design Tools</h5>
        <p className={styles.copy}>Figma, Balsamiq, Photoshop, Illustrator</p>
        <h5 className={styles.heading}>Miscellaneous</h5>
        <p className={styles.copy}>
          VS Code, Atom, Terminal/Command Line, Chrome Developer Tools, Version
          Control(Git), Markdown, Postman, JSON, REST API&apos;s, Slack, Zoom
        </p>
      </motion.div>
    </section>
  );
}

export default Skills;
