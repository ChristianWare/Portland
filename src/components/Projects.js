import styles from "../../styles/Projects.module.css";
import ProjectsCube from "../components/Cubes/ProjectsCube";
import Product from "./Product";

function Projects() {
  return (
    <section className={styles.pSection}>
      <div className={styles.pContent}>
        <ProjectsCube>Projects</ProjectsCube>
        <div className={styles.pLeft}>
          <h5>Here are some of the Apps I've build with NextJs: </h5>
        </div>
      </div>
    </section>
  );
}

export default Projects;
