import styles from "../../styles/Skills.module.css";
import SkillsCube from "../components/Cubes/SkillsCube";

function Skills() {
  return (
    <section className={styles.sContainer}>
      <div className={styles.sLeft}>
        <h3 className={styles.headingIntro} lang='en'>
          02. <br /> <br />
          Skills & Technologies
        </h3>
        <h3 className={styles.heading}>Front End</h3>
        <p className={styles.copy}>HTML, CSS, JavaScript (ES6)</p>
        <h3 className={styles.heading}>Back End</h3>
        <p className={styles.copy}>
          NodeJS/npm, Express, Mongo Atlas, Firebase, Strapi, Contentful
        </p>
        <h3 className={styles.heading}>Libraries & Frame Works</h3>
        <p className={styles.copy}>
          NextJS, React, Styled-Components, SASS, Bootstrap, Material-UI, Framer
          Motion, GSAP, Three.JS
        </p>
        <h3 className={styles.heading}>Design Tools</h3>
        <p className={styles.copy}>Figma, Balsamiq, Photoshop, Illustrator</p>
        <h3 className={styles.heading}>Miscellaneous</h3>
        <p className={styles.copy}>
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
