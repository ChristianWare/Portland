import styles from "../../../styles/ProjectsCube.module.css";
import Link from 'next/link'

function ProjectsCube({ children }) {
    return (
      <div className={styles.container}>
        <Link href='/'>
          <a>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
          </a>
        </Link>
      </div>
    );
}

export default ProjectsCube;
