import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { SiHackthebox } from "react-icons/si";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href='/'>
            <span className={styles.navbarLogo}>
              <SiHackthebox className={styles.navbarIcon} />
              <a>Christian Ware</a>
            </span>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='#about'>
                <a>About</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='#projects'>
                <a>Projects</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='#skills'>
                <a>Skills</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='#contact'>
                <a>Contact</a>
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
        </nav>
      </header>
    </>
  );
}

export default Navbar;
