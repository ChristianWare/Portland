import styles from "../../styles/Skills.module.css";
import Cube from "../components/Cubes/Cube";

function Skills() {
  return (
    <div className={styles.aContainer}>
      <div className={styles.aRight}>
        <h5 className={styles.aSub}>Front End</h5>
        <p className={styles.aDescription}>HTML, CSS (Styled-Components, SASS, CSS Modules, Bootstrap, Material-UI), JavaScript (ES6)</p>
        <h5 className={styles.aSub}>Back End</h5>
        <p className={styles.aDescription}>
          NodeJS, Express, Mongo Atlas, Strapi, Contentful
        </p>
        <h5 className={styles.aSub}>Frame Works</h5>
        <p className={styles.aDescription}>NextJS, React</p>
        <h5 className={styles.aSub}>Design Tools</h5>
        <p className={styles.aDescription}>Figma, Balsalmic, Photoshop, Illustrator</p>
      </div>
      <div className={styles.aLeft}>
        <div className={styles.cubeContainer}>
          <Cube>Skills</Cube>
        </div>
      </div>
    </div>
  );
}

export default Skills;
