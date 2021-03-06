import styles from "../../styles/Skills.module.css";
import SkillsCube from "../components/Cubes/SkillsCube";

function Skills() {
  return (
    <section className={styles.sContainer} id='skills'>
      <div className={styles.sRight}>
        <div className={styles.cubeContainer}>
          <SkillsCube>Skills</SkillsCube>
          <SkillsCube>Skills</SkillsCube>
          <SkillsCube>Skills</SkillsCube>
        </div>
      </div>
      <div className={styles.sLeft}>
        <h3 className={styles.headingIntro} lang='en'>
          03. <br /> <br />
          Skills & Technologies
        </h3>
        <h5 className={styles.heading}>Front End</h5>
        <p className={styles.copy}>HTML, CSS, JavaScript (ES6)</p>
        <h5 className={styles.heading}>Back End</h5>
        <p className={styles.copy}>
          NodeJS/npm, Express, Mongo DB, Firebase, Strapi, Contentful
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
          Control(Git), Markdown, Postman, GraphQL, JSON, REST API&apos;s,
          Slack, Zoom, SEO, Google Analytics
        </p>
      </div>
    </section>
  );
}

export default Skills;
