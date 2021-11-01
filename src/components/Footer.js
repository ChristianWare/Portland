import Link from "next/link";
import { SiHackthebox } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.fContainer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Link href='/'>
            <span className={styles.navbarLogo}>
              <SiHackthebox className={styles.navbarIcon} />
              <a>Christian Ware</a>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
