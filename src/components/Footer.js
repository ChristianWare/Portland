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
          <span className={styles.fLogo}>
            <SiHackthebox className={styles.fIcon} />
            <a>Christian Ware</a>
          </span>

          <p className={styles.fDescription}>
            Thank you for visiting my personal portfolio website. Feel free to
            reach out to me for more information.
          </p>
          <Link href='/'>
            <button>Back to Top</button>
          </Link>
        </div>
        <div className={styles.col}>
          <h5>Contact</h5>
          <p>602-454-7891</p>
          <p>chris.ware.dev@gmail.com</p>
          <div className={styles.fSocialIcons}>
            <Link href='/'>
              <a>
                <BsGithub className={styles.fSocialIcon} />
              </a>
            </Link>
            <Link href='/'>
              <BsLinkedin className={styles.fIcon} />
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <h5>Projects</h5>
          <ul>
            <Link href='/'>
              <li>
                <a>Portland</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>Taco Bell</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>Mandalorian</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>NBA</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.col}>
          <h5>Skills</h5>
          <ul>
            <Link href='/'>
              <li>
                <a>React</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>NextJS</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>JavaScript</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>NodeJS</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className={styles.bottomBorder} />
      <div className={styles.copyContainer}>
        <p lassName={styles.fCopy}>
          <span className={styles.fCopyLogo}>
            <SiHackthebox className={styles.fcopyIcon} />
            <a>Christian Ware</a>
          </span>
          &copy; - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
