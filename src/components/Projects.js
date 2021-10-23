import styles from "../../styles/Projects.module.css";
import ProjectsCube from "../components/Cubes/ProjectsCube";

function Projects() {
  return (
    <div className={styles.p}>
      <ProjectsCube>Projects</ProjectsCube>
    </div>
  );
}

export default Projects;
