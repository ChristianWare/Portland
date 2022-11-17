import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import ProjectsCube from "./Cubes/ProjectsCube";

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.headingTop}>
        <h3 className={styles.heading} lang='en' id='projects'>
          <span>02.</span> <br />
          Projects & Details
        </h3>
        <div className={styles.cubeContainer}>
          <ProjectsCube className={styles.cubeContainer} text='Projects' />
        </div>
      </div>

      {projects.map(
        ({
          id,
          title,
          description,
          frontEnd,
          backEnd,
          npmDep,
          styling,
          image,
          github,
          url,
        }) => (
          <div key={id} className={styles.allItems}>
            <div className={styles.item}>
              <div className={styles.right}>
                    <h2 className={styles.projectTitle}>{title}</h2>
                <div className={styles.descLeft}>
                  <div className={styles.text}>
                    <p lang='en' className={styles.projectDescription}>
                      {description}
                    </p>
                    <p lang='en' className={styles.tech}>
                      Front End: <span>{frontEnd}</span>
                    </p>
                    <p lang='en' className={styles.tech}>
                      Back End: <span>{backEnd}</span>
                    </p>
                    <p lang='en' className={styles.tech}>
                      NPM Dependencies: <span>{npmDep}</span>
                    </p>
                    <p lang='en' className={styles.tech}>
                      Styling: <span>{styling}</span>
                    </p>
                  </div>
                  <div className={styles.imgContainer}>
                    <Image
                      alt='preview'
                      src={image}
                      className={styles.img}
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <Link href={github}>
                    <a className={styles.button1} target='_blank'>
                      GitHub
                    </a>
                  </Link>
                  <Link href={url}>
                    <a className={styles.button2} target='_blank'>
                      Live Site
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.buttonContainer}></div>
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default Projects;
