import styles from "../../styles/Skills.module.css";
import SkillsCube from "../components/Cubes/SkillsCube";

function Skills() {
  return (
    <section className={styles.sContainer}>
      <div className={styles.sLeft}>
        <h3 className={styles.sSub}>
          Front End
        </h3>
        <p className={styles.sDescription}>HTML, CSS, JavaScript (ES6)</p>
        <h3 className={styles.sSub}>
          Back End
        </h3>
        <p className={styles.aDescription}>
          NodeJS/npm, Express, Mongo Atlas, Firebase, Strapi, Contentful
        </p>
        <h3 className={styles.sSub}>
          Libraries & Frame Works
        </h3>
        <p className={styles.sDescription}>
          NextJS, React, Styled-Components, SASS, Bootstrap, Material-UI, Framer
          Motion, GSAP, Three.JS
        </p>
        <h3 className={styles.sSub}>
          Design Tools
        </h3>
        <p className={styles.aDescription}>
          Figma, Balsamiq, Photoshop, Illustrator
        </p>
        <h3 className={styles.sSub}>
          Miscellaneous
        </h3>
        <p className={styles.aDescription}>
          VS Code, Atom, Terminal/Command Line, Chrome Developer Tools, Version
          Control(Git), Markdown, Postman, JSON, REST API&apos;s, Slack, Zoom
        </p>
      </div>
      <div className={styles.sRight}>
        <div id='skills' className={styles.cubeContainer}>
          <SkillsCube>Skills</SkillsCube>
          <SkillsCube>Skills</SkillsCube>
          <SkillsCube>Skills</SkillsCube>
        </div>
      </div>
    </section>
  );
}

export default Skills;
