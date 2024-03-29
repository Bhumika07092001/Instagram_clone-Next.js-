import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Image src="/home.png" width={25} height={30}></Image>
      <Image src="/search.png" width={25} height={30}></Image>
      <Link href="/createpost">
        <Image src="/add.png" width={25} height={30}></Image>
      </Link>
      <Image src="/clapperboard.png" width={25} height={30}></Image>
      <Image src="/user.png" width={25} height={30}></Image>
    </footer>
  );
};

export default Footer;
