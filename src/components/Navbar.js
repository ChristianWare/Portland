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
          <Link href='/' passHref>
            <span className={styles.navbarLogo}>
              <SiHackthebox className={styles.navbarIcon} />
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
            <li className={styles.navitem}>
              <Link href='/'>
                <a onClick={openMenu}>404</a>
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
