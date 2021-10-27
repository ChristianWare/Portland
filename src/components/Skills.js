import styles from "../../styles/Skills.module.css";
import Cube from "../components/Cubes/Cube";

function Skills() {
  return (
    <section id='skills' className={styles.aContainer}>
      <div className={styles.aRight}>
        <h5 className={styles.aSub}>Front End</h5>
        <p className={styles.aDescription}>HTML, CSS, JavaScript (ES6)</p>
        <h5 className={styles.aSub}>Back End</h5>
        <p className={styles.aDescription}>
          NodeJS/npm, Express, Mongo Atlas, Firebase, Strapi, Contentful
        </p>
        <h5 className={styles.aSub}>Libraries & Frame Works</h5>
        <p className={styles.aDescription}>
          NextJS, React, Styled-Components, SASS, Bootstrap, Material-UI, Framer
          Motion, GSAP, Three.JS
        </p>
        <h5 className={styles.aSub}>Design Tools</h5>
        <p className={styles.aDescription}>
          Figma, Balsamiq, Photoshop, Illustrator
        </p>
        <h5 className={styles.aSub}>Miscellaneous</h5>
        <p className={styles.aDescription}>
          VS Code, Atom, Terminal/Command Line, Chrome Developer Tools, Version
          Control(Git), Postman, JSON, REST API's, Slack, Zoom
        </p>
      </div>
      <div className={styles.aLeft}>
        <div className={styles.cubeContainer}>
          <Cube>Skills</Cube>
          <Cube>Skills</Cube>
          <Cube>Skills</Cube>
        </div>
      </div>
    </section>
  );
}

export default Skills;
