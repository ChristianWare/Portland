import styles from "../../styles/Projects.module.css";
import ProjectsCube from "../components/Cubes/ProjectsCube";
import Cube from "../../src/components/Cubes/Cube";
import Link from "next/link";

function Projects({
  id,
  title,
  subheading,
  description,
  skills,
  gitHubUrl,
  sampleUrl,
}) {
  return (
    <>
      <section className={styles.pSection}>
        <div className={styles.projectCubes}>
          <ProjectsCube>{title}</ProjectsCube>
        </div>
        <div className={styles.projectText}>
          <div className={styles.pInfoLeft}>
            <h5 className={styles.pSub}>{subheading}</h5>
            <p className={styles.pDescription}>{description}</p>
            <p className={styles.pDescriptionSkills}>
              {skills.map((skill) => (
                <div key={id} className={styles.skill}>{skill}</div>
              ))}
            </p>
            <div className={styles.pLinks}>
              {/* {sampleUrl && (
                <Link href={sampleUrl}>
                  <a className={styles.sampleUrl}>Live Site</a>
                </Link>
              )}
              {gitHubUrl && (
                <Link href={gitHubUrl}>
                  <a className={styles.github}>GitHub</a>
                </Link>
              )}
              <Link href={gitHubUrl}>
                <a className={styles.github}>Preview (Hover)</a>
              </Link> */}
              <div className={styles.buttonContainer}>
                <Link href='#about'>
                  <a className={styles.button1}>Live Site</a>
                </Link>
                <Link href='#about'>
                  <a className={styles.button2}>GitHub</a>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
