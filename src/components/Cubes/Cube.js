import styles from "../../../styles/Cube.module.css";

function Cube({ text }) {
  return (
    <div className={styles.box}>
      <div className={styles.cube}>
        <div className={styles.front}>{text}</div>
        <div className={styles.back}>{text}</div>
        <div className={styles.right}></div>
        <div className={styles.top}>{text}</div>
        <div className={styles.left}></div>
        <div className={styles.bottom}>{text}</div>
      </div>
    </div>
  );
}

export default Cube;
