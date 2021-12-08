import styles from "../../styles/Skills.module.css";
import Cube from "../components/Cubes/Cube";

function Skills() {
  return (
    <section className={styles.sContainer}>
      <div className={styles.sLeft}>
        <h5 className={styles.sSub} id='frontend'>
          Front End
        </h5>
        <p className={styles.sDescription}>HTML, CSS, JavaScript (ES6)</p>
        <h5 className={styles.sSub} id='backend'>
          Back End
        </h5>
        <p className={styles.aDescription}>
          NodeJS/npm, Express, Mongo Atlas, Firebase, Strapi, Contentful
        </p>
        <h5 className={styles.sSub} id='libfram'>
          Libraries & Frame Works
        </h5>
        <p className={styles.sDescription}>
          NextJS, React, Styled-Components, SASS, Bootstrap, Material-UI, Framer
          Motion, GSAP, Three.JS
        </p>
        <h5 className={styles.sSub} id='design'>
          Design Tools
        </h5>
        <p className={styles.aDescription}>
          Figma, Balsamiq, Photoshop, Illustrator
        </p>
        <h5 className={styles.sSub} id='misc'>
          Miscellaneous
        </h5>
        <p className={styles.aDescription}>
          VS Code, Atom, Terminal/Command Line, Chrome Developer Tools, Version
          Control(Git), Markdown, Postman, JSON, REST API&apos;s, Slack, Zoom
        </p>
      </div>
      <div className={styles.sRight}>
        <div id='skills' className={styles.cubeContainer}>
          <Cube>Skills</Cube>
          <Cube>Skills</Cube>
          <Cube>Skills</Cube>
        </div>
      </div>
    </section>
  );
}

export default Skills;
