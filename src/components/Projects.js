import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import ProjectsCube from "./Cubes/ProjectsCube";
import { motion } from "framer-motion";
import { useScroll } from "./utils/useScroll";
import { slideLeft, slideRight } from "../components/utils/Animation";

function Projects() {
  const [element, controls] = useScroll();

  return (
    <section className={styles.projects}>
      <div className={styles.headingTop} ref={element}>
        <motion.h3
          animate={controls}
          variants={slideLeft}
          transition={{ delay: 0.1, stiffness: 300 }}
          className={styles.heading}
          lang='en'
          id='projects'
        >
          02. <br /> <br />
          Projects & Details
        </motion.h3>
        <motion.div
          animate={controls}
          variants={slideRight}
          transition={{ delay: 0.1, stiffness: 300 }}
          className={styles.cubeContainer}
        >
          <ProjectsCube className={styles.cubeContainer}>Projects</ProjectsCube>
        </motion.div>
      </div>

      {projects.map(({ id, description, title, tech, image, github, url }) => (
        <div key={id} className={styles.allItems}>
          <div className={styles.item}>
            <div className={styles.right}>
              <div className={styles.descLeft}>
                <div className={styles.text}>
                  <h2 className={styles.projectTitle}>{title}</h2>
                  <p lang='en' className={styles.projectDescription}>
                    {description}
                  </p>
                  <p lang='en' className={styles.projectDescription}>
                    {tech}
                  </p>
                </div>
                <div className={styles.imgContainer}>
                  <Image alt='preview' src={image} className={styles.img} />
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <Link href={github}>
                  <motion.a
                    whileTap={{ scale: 0.9 }} className={styles.button1} target='_blank'>
                    GitHub
                  </motion.a>
                </Link>
                <Link href={url}>
                  <motion.a
                    whileTap={{ scale: 0.9 }} className={styles.button2} target='_blank'>
                    Live Site
                  </motion.a>
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
