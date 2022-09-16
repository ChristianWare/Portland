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
          <span>03.</span> <br />
          Skills & Technologies
        </h3>
        <h5 className={styles.heading}>Front End</h5>
        <p className={styles.copy}>
          HTML, CSS, JavaScript, Typescript, React, Next.js
        </p>
        <h5 className={styles.heading}>Back End</h5>
        <p className={styles.copy}>Node.js, Express</p>
        <h5 className={styles.heading}>Databases</h5>
        <p className={styles.copy}>Mongo DB/Mongoose, Supabase</p>
        <h5 className={styles.heading}>Headless CMS</h5>
        <p className={styles.copy}>Strapi, Contentful, Sanity, GraphCMS</p>
        <h5 className={styles.heading}>Style Libraries</h5>
        <p className={styles.copy}>
          Styled-Components, Tailwind, SASS, Bootstrap, Grommet, Ant Design, Material-UI, CSS Modules, 
          Framer Motion, GSAP, Three.JS
        </p>
        <h5 className={styles.heading}>Design Tools</h5>
        <p className={styles.copy}>Figma, Balsamiq, Photoshop, Illustrator</p>
        <h5 className={styles.heading}>Miscellaneous</h5>
        <p className={styles.copy}>
          Terminal/Command Line, Git, Markdown, Postman, GraphQL, JWT, Redux, JSON, REST
          API&apos;s, SEO, Google Analytics, Slack, Zoom,
        </p>
      </div>
    </section>
  );
}

export default Skills;
