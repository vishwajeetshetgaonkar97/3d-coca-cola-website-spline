import React from "react"
import styles from './styles.module.css'
import CocaColaLogo from '../../Assets/Coca-Cola_logo.svg'
import Image from "next/image"

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
<Image className={styles.logo} src={CocaColaLogo} alt="logo"/>
<ul className={styles.navList}>
    <li className={styles.navListItems}>features</li>
    <li className={styles.navListItems}>Products</li>
    <li className={styles.navListItems}>about</li>
</ul>
        </div>
    )
}

export default Navbar
