import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { FaCube } from "react-icons/fa";
import { motion } from "framer-motion";
import { fromUp } from "../components/utils/Animation";
import { useScroll } from "./utils/useScroll";

function Navbar() {
  const [element, controls] = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.querySelector("body");
    if (window.innerWidth <= 953 && isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <header className={styles.header} ref={element}>
        <motion.nav
          animate={controls}
          variants={fromUp}
          transition={{ delay: 0.01, stiffness: 300 }} className={styles.navbar}>
          <Link href='/' passHref>
            <span className={styles.navbarLogo}>
              <FaCube className={styles.navbarIcon} />
              <a>Christian Ware</a>
            </span>
          </Link>
          <ul
            onClick={openMenu}
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href='#about'>
                <a onClick={openMenu}>About</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='#skills'>
                <a onClick={openMenu}>Skills</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='#projects'>
                <a onClick={openMenu}>Projects</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='#contact'>
                <a onClick={openMenu}>Contact</a>
              </Link>
            </li>
          </ul>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </span>
        </motion.nav>
      </header>
    </>
  );
}

export default Navbar;
