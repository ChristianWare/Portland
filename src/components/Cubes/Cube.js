import styles from "../../../styles/Cube.module.css";

function Cube({ children }) {
  return (
    <div className={styles.box}>
      <div className={styles.cube}>
        <div className={styles.front}>{children}</div>
        <div className={styles.back}>{children}</div>
        <div className={styles.right}>{children}</div>
        <div className={styles.top}>{children}</div>
        <div className={styles.left}>{children}</div>
        <div className={styles.bottom}>{children}</div>
      </div>
    </div>
  );
}

export default Cube;
