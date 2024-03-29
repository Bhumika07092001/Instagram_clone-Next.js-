import React from "react";
import Image from "next/image";
import styles from "./nav.module.css";

const NavBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.LogoContainer}>
        <Image src="/Instagram_logo.svg.png" width={102} height={50}></Image>
      </div>
      <div className={styles.NavContainer}>
        <Image src="/heart.png" width={25} height={30}></Image>
        <Image src="/send.png" width={25} height={30}></Image>
      </div>
    </header>
  );
};

export default NavBar;
