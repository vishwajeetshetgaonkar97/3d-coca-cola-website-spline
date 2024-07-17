import React from "react";
import styles from "./styles.module.css";
import CocaColaLogo from "../../Assets/Coca-Cola_logo.svg";
import Image from "next/image";
import closeIcon from '../../Assets/close.png';
import menuIcon from '../../Assets/menu.png'
import { useState } from "react";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <Image className={styles.logo} src={CocaColaLogo} alt="logo" />
      <div
        className={styles.linksBurgerContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          className={`${isOpen ? styles.closeIcon : styles.burgerIcon}`}
          src={isOpen ? closeIcon : menuIcon}
          width={100}
          height={100}
          alt="logo image"
        />
      </div>
      <ul className={`${styles.navList} ${
            isOpen ? styles.linksContainerActive : ""
          }`}>
        <li className={styles.navListItems}>History</li>
        <li className={styles.navListItems}>About</li>
        <li className={styles.navListItems}>Products</li>
      </ul>
    </div>
  );
};

export default Navbar;
