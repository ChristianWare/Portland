import styles from "../../styles/About.module.css";
import Cube from "../components/Cubes/Cube";

function About() {
  return (
    <article id="about" className={styles.aContainer}>
      <div className={styles.aLeft}>
        <div className={styles.cubeContainer}>
          <Cube text="About" />
        </div>
      </div>

      <div className={styles.aRight}>
        <h3 className={styles.heading} lang="en">
          <span>01.</span> <br />I build web
          applications with Next JS and React.
        </h3>
        <p className={styles.copy} lang="en">
          Because of my background in design, and finance, I understand the
          aesthetic and business side to any project. While websites have to
          make good impressions on their visitors, they should also motivate
          them to action.
          <br />
        </p>
      </div>
    </article>
  );
}

export default About;
