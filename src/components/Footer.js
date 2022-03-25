import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { FaCube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
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
              Expand on the keyword with more keywords and add a list of related
              services that you do and include the city, state of your service
              area.
            </p>
            <div className={styles.sci}>
              <GrFacebookOption className={styles.icon} />
              <BsInstagram className={styles.icon} />
              <FiYoutube className={styles.icon3} />
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
                <Link href='/' passHref>
                  <li>Beards</li>
                </Link>
                <li>Mustashes</li>
                <li>Hair Cuts</li>
                <li>Kids</li>
              </ul>
            </div>
            <div className={styles.list2}>
              <h6 className={styles.heading}>About</h6>
              <ul>
                <Link href='/' passHref>
                  <li>Our Story</li>
                </Link>
                <li>Barbers</li>
                <li>Location</li>
                <li>Prices</li>
              </ul>
            </div>
            <div className={styles.list3}>
              <h6 className={styles.heading}>Projects</h6>
              <ul>
                <Link href='/' passHref>
                  <li>Address</li>
                </Link>
                <li>Email</li>
                <li>Phone</li>
                <li>Insta</li>
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
