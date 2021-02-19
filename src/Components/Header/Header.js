import React from "react";
import styles from "./Header.module.scss";
import CallIcon from "@material-ui/icons/Call";
import logoImage from "../../images/BMW_Logo.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <CallIcon className={styles.call} fontSize="large" />
      <div className={styles.logo}>BMW</div>
      <img src={logoImage} alt="BMW logo" />
    </div>
  );
}
