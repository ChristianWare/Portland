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
          <div className={styles.logoContainer}>
            <span className={styles.fLogo}>
              <SiHackthebox className={styles.fIcon} />
              <a>Christian Ware</a>
            </span>
          </div>

          <p className={styles.fDescription}>
            Thank you for visiting my personal portfolio website. Feel free to
            reach out to me for more information.
          </p>
          <Link href='/' passHref>
            <button>Back to Top</button>
          </Link>
        </div>
        <div className={styles.col}>
          <h5>Contact</h5>
          <p>602-842-4048</p>
          <a href='mailto:chris.ware.dev@gmail.com'>chris.ware.dev@gmail.com</a>
          <div className={styles.fSocialIcons}>
            <Link href='https://github.com/ChristianWare'>
              <a target='_blank'>
                <BsGithub className={styles.fSocialIcon} />
              </a>
            </Link>
            <Link href='https://www.linkedin.com/in/christian-ware/' passHref>
              <a target='_blank'>
                <BsLinkedin className={styles.fIcon} />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <h5>Projects</h5>
          <ul>
            <Link href='/' passHref>
              <li>
                <a>Portland</a>
              </li>
            </Link>
            <Link href='/' passHref>
              <li>
                <a>Taco Bell</a>
              </li>
            </Link>
            <Link href='/' passHref>
              <li>
                <a>Telements</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.col}>
          <h5>Skills</h5>
          <ul>
            <Link href='/' passHref>
              <li>
                <a>React</a>
              </li>
            </Link>
            <Link href='/' passHref>
              <li>
                <a>NextJS</a>
              </li>
            </Link>
            <Link href='/' passHref>
              <li>
                <a>JavaScript</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className={styles.bottomBorder} />
      <div className={styles.copyContainer}>
        <p className={styles.fCopy}>
          <span className={styles.fCopyLogo}>
            <SiHackthebox className={styles.fcopyIcon} />
            <a>
              Christian Ware {new Date().getFullYear()} &copy; - All Rights
              Reserved
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
