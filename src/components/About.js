import styles from "../../styles/About.module.css";
import Cube from "../components/Cubes/Cube";

function About() {
  return (
    <article id='about' className={styles.aContainer}>
      <div className={styles.aLeft}>
        <div className={styles.cubeContainer}>
          <Cube>About</Cube>
        </div>
      </div>

      <div className={styles.aRight}>
        <h3 lang='en' className={styles.aSub}>
          I am a Web Developer who specializes in building web applications with
          NextJS and React.
        </h3>
        <p lang='en' className={styles.aDescription}>
          Becasue of my background in design, and finance, I understand the
          asthetic and business side to any project. While websites have to make
          good impressions on it&apos;s visitors, they should also motivate them
          to action.
        </p>
        <p className={styles.aDescription}>
          I am looking for an opportunity to apply these principles in a role as
          a Front End Developer.
        </p>
      </div>
    </article>
  );
}

export default About;
