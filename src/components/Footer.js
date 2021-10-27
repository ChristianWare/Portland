import Link from "next/link";
import { SiHackthebox } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>About</h3>
          <Link href='/'>
            <a>About Me</a>
          </Link>
        </div>

        <div className={styles.box}>
          <h3>Skills</h3>
          <Link href='/'>
            <a>Front End</a>
          </Link>
          <Link href='/'>
            <a>Back End</a>
          </Link>
          <Link href='/'>
            <a>Libraries & Frame Works</a>
          </Link>
          <Link href='/'>
            <a>Design Tools</a>
          </Link>
          <Link href='/'>
            <a>Miscellaneous</a>
          </Link>
        </div>

        <div className={styles.box}>
          <h3>Projects</h3>
          <Link href='/'>
            <a>Portfolio</a>
          </Link>
          <Link href='/'>
            <a>Taco Bell</a>
          </Link>
          <Link href='/'>
            <a>NBA</a>
          </Link>
          <Link href='/'>
            <a>Mandalorian</a>
          </Link>
        </div>

        <div className={styles.box}>
          <h3>Contact</h3>
          <Link href='/'>
            <a>917-769-1192</a>
          </Link>
          <Link href='/'>
            <a>
              <AiOutlineMail className={styles.fIcon} />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <BsGithub className={styles.fIcon} />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <BsLinkedin className={styles.fIcon} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.fCopyright}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <span className={styles.navbarLogo}>
              <SiHackthebox className={styles.navbarIcon} />
              <a>Christian Ware</a>
            </span>
          </Link>
        </div>

        <small>
          Designed and Built by Christian Ware &copy; {new Date().getFullYear}|
          All Rights Reserved
        </small>
      </div>
    </section>
  );
}

export default Footer;
