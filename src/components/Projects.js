import styles from "../../styles/Projects.module.css";
import Link from 'next/link';
import projects from "../data/projects";
import ProjectsCube from "./Cubes/ProjectsCube";
 
function Projects() {
  return (
    <section className={styles.projects}>
      <ProjectsCube className={styles.cubeContainer}>Projects</ProjectsCube>

      {projects.map((project) => (
        <div className={styles.allItems}>
          <div className={styles.item}>
            <div className={styles.right}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.buttonContainer}>
                <Link href='#about'>
                  <a className={styles.button1}>GitHub</a>
                </Link>
                <Link href='#contact'>
                  <a className={styles.button2}>Live Site</a>
                </Link>
              </div>
            </div>
            <div className={styles.buttonContainer}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
