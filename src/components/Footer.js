import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { FaCube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { fromUp, fromDown, slideRight } from "../components/utils/Animation";
import { motion } from "framer-motion";
import { useScroll } from "./utils/useScroll";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <section className={styles.footerContainer} ref={element}>
      <footer className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <motion.div
            animate={controls}
            variants={fromUp}
            transition={{ delay: 0.1, stiffness: 300 }}
            className={styles.footerLeft}
          >
            <Link href='/' passHref>
              <span className={styles.navbarLogo}>
                <FaCube className={styles.navbarIcon} />
                <a>Christian Ware</a>
              </span>
            </Link>
            <p lang='en'>
              Thank you for visiting my personal portfolio website. Feel free to
              contact me any time. Looking forward to hearing from you soon.
            </p>
            <div className={styles.sci}>
              <Link href='mailto:chris.ware.dev@gmail.com'>
                <a>
                  <AiOutlineMail className={styles.icon} />
                </a>
              </Link>
              <Link href='https://github.com/ChristianWare' rel='noreferrer'>
                <a target='_blank'>
                  <BsGithub className={styles.icon} />
                </a>
              </Link>
              <Link
                href='https://www.linkedin.com/in/christian-ware/'
                rel='noreferrer'
              >
                <a target='_blank'>
                  <BsLinkedin className={styles.icon} />
                </a>
              </Link>
            </div>
          </motion.div>
          <motion.div
            animate={controls}
            variants={fromDown}
            transition={{ delay: 0.1, stiffness: 300 }}
            className={styles.footerRight}
          >
            <div className={styles.list1}>
              <h6 className={styles.heading}>Skills</h6>
              <ul>
                <li>React</li>
                <li>Next JS</li>
                <li>Javascript</li>
                <li>Mongo DB</li>
              </ul>
            </div>
            <div className={styles.list2}>
              <h6 className={styles.heading}>About</h6>
              <ul>
                <li>Web Dev</li>
                <li>Node JS</li>
                <li>Three.js</li>
                <li>GSAP</li>
              </ul>
            </div>
            <div className={styles.list3}>
              <h6 className={styles.heading}>Projects</h6>
              <ul>
                <li>Taco Bell</li>
                <li>Fonts & Footers</li>
                <li>Razor Edge</li>
                <li>Telements</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <hr className={styles.hr} />
        <motion.div
          animate={controls}
          variants={slideRight}
          transition={{ delay: 0.1, stiffness: 300 }}
          className={styles.copyrightContainer}
        >
          <small>
            Christian Ware {new Date().getFullYear()} &copy; - All Rights
            Reserved || Designed/Developed by{" "}
            <Link href='https://chrisware.io' passHref>
              <a className={styles.cw} target='_blank'>
                Chris Ware
              </a>
            </Link>
          </small>
        </motion.div>
      </footer>
    </section>
  );
}

export default Footer;
