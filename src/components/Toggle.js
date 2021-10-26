import styles from '../../styles/Toggle.module.css'

import { MdOutlineWbSunny } from "react-icons/md";
import { BiMoon } from "react-icons/bi";

function Toggle() {
    return (
      <div className={styles.tContainer}>
        <MdOutlineWbSunny className={styles.tIcon} />
        <BiMoon className={styles.tIcon} />
        <div className={styles.tButton}></div>
      </div>
    );
}

export default Toggle
