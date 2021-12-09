import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import ProjectsCube from "./Cubes/ProjectsCube";

function Projects() {
  return (
    <section className={styles.projects}>
      <ProjectsCube className={styles.cubeContainer}>Projects</ProjectsCube>

      {projects.map((project) => (
        <div key={project.id} className={styles.allItems}>
          <div className={styles.item}>
            <div className={styles.right}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p lang='en' className={styles.projectDescription}>
                {project.description}
              </p>
              <p lang='en' className={styles.projectDescription}>
                {project.tech}
              </p>
              <h3>Preview :</h3>
              <div className={styles.imgContainer}>
                <Image
                alt="preview"
                  src={project.image}
                  width={project.width}
                  height={project.height}
                />
              </div>
              <div className={styles.buttonContainer}>
                <Link href={project.github}>
                  <a className={styles.button1} target='_blank'>
                    GitHub
                  </a>
                </Link>
                <Link href={project.url}>
                  <a className={styles.button2} target='_blank'>
                    Live Site
                  </a>
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
