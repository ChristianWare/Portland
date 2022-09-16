import styles from "../../../styles/ProjectsCube.module.css";

function ProjectsCube({ text }) {
    return (
      <div className={styles.container}>
        <a>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </a>
      </div>
    );
}

export default ProjectsCube;
