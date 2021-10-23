import styles from "../../styles/Projects.module.css";
import Cube from "./Cube";
import ProjectsCube from "./ProjectsCube";

function Projects() {
  return (
    <div className={styles.p}>
      <ProjectsCube>Projects</ProjectsCube>
    </div>
  );
}

export default Projects;
