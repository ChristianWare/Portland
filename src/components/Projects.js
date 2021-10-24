import styles from "../../styles/Projects.module.css";
import ProjectsCube from "../components/Cubes/ProjectsCube";
import Cube from "../../src/components/Cubes/Cube";
import Link from 'next/link'

function Projects() {
  return (
    <section className={styles.pSection}>
      <div className={styles.projectCubes}>
        <ProjectsCube>Projects</ProjectsCube>
      </div>
      <div className={styles.projectText}>
        <div className={styles.projectTitle}>
          <ProjectsCube>Project1</ProjectsCube>
        </div>
        <div className={styles.projectInfo}>
          <h5 className={styles.pSub}>
            My first project is my personal portfolio site, which you are
            currently viweing. I built it using NextJS and CSS Modules.
          </h5>
          <p className={styles.aDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            voluptatum quasi sapiente soluta, nemo praesentium cum molestias in
            exercitationem, incidunt dicta quia accusantium! Distinctio sint,
            accusamus perspiciatis aut dolorem ullam.
          </p>
          <p className={styles.aDescription}>
            Ad voluptatum quasi sapiente soluta, nemo praesentium cum molestias
            in exercitationem.
          </p>
          <div className={styles.buttonContainer}>
            <Link href='#about'>
              <a className={styles.button1}>Github</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
