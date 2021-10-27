import Cube from "./Cubes/Cube";
import styles from "../../styles/SectionHeader.module.css";

function SectionHeader({ children }) {
  return (
    <div id='projects' className={styles.sectionContainer}>
      <Cube>{children}</Cube>
      <Cube>{children}</Cube>
      <Cube>{children}</Cube>
      <Cube>{children}</Cube>
      {/* <Cube>{children}</Cube> */}
    </div>
  );
}

export default SectionHeader;
