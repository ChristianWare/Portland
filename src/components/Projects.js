import styles from "../../styles/Projects.module.css";
import image1 from "../../public/images/image3.jpg";
import Image from 'next/image'
 
function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionHeading}>Projects</h2>
      <div className={styles.allItems}>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.img}>
              <Image src={image1} alt='project' width='100' height='100' />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.projectTitle}>Project 1</h2>
            <h3 className={styles.projectSubTitle}>Project 1 Subtitle</h3>
            <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio culpa in sunt magni eos perspiciatis autem repudiandae unde repellat praesentium, reprehenderit molestiae similique rem debitis dignissimos impedit mollitia vel vitae?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
