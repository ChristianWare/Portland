import styles from "../../styles/Cube.module.css";

function Cube() {
  return (
    <div className={styles.box}>
      <div className={styles.cube}>
        <div className={styles.front}>div</div>
        <div className={styles.back}>div</div>
        <div className={styles.right}>div</div>
        <div className={styles.left}>div</div>
        <div className={styles.top}>div</div>
        <div className={styles.bottom}>div</div>
      </div>
    </div>
  );
}

export default Cube;
