import React from "react";
import getTimeString from "../Library/getTimeString";
import styles from "./Message.module.scss";

export default function Message({ time, message }) {
  return (
    <div className={styles.sendMessage}>
      <div className={styles.sendMessageBox}>{message}</div>
      <div className={styles.time}>{getTimeString(time)}</div>
    </div>
  );
}
