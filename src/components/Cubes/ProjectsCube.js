import styles from "../../../styles/ProjectsCube.module.css";

function ProjectsCube({ children }) {
    return (
      <div className={styles.container}>
          <a>
            <span>{children}</span>
            <span>{children}</span> 
            <span>{children}</span>
            <span>{children}</span>
          </a>
      </div>
    );
}

export default ProjectsCube;
