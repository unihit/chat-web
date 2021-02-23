import React, { useState, useEffect } from "react";
import { InputAdornment, TextField, Button } from "@material-ui/core";
import io from "socket.io-client";
import SendIcon from "@material-ui/icons/Send";
import styles from "./Form.module.scss";

// 3001번 포트 사용(서버)
const socket = io("http://localhost:3001/");

export default function Form() {
  const [userId, setUserId] = useState("id1");
  const [msgList, setMsgList] = useState([]);
  const [msg, setMsg] = useState("");

  // const mutaition = useMutation(sendMessage, {
  //   variables: {
  //     senderId: window.sessionStorage.getItem("id"),
  //     receiverId: chatId,
  //     contents,
  //     time: new Date(),
  //   },
  // });

  // var socket = io();
  // var nickname = prompt("what is your name?");
  // var messages = document.getElementById("messages");
  // var form = document.getElementById("form");
  // var input = document.getElementById("input");

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   if (input.value) {
  //     socket.emit("chat-message", nickname + ": " + input.value);
  //     input.value = "";
  //   }
  // });
  // var item = document.createElement("li");
  // item.textContent = "You Joined";
  // messages.appendChild(item);

  // socket.emit("enterance-message", nickname);

  // socket.on("chat-message", function (msg) {
  //   var item = document.createElement("li");
  //   item.textContent = msg;
  //   messages.appendChild(item);
  //   window.scrollTo(0, document.body.scrollHeight);
  // });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("send message", { name: userId, message: msg });
  };

  useEffect(() => {
    // socket.on("receive message", (message) => {
    //   setMsgList((msgList) => msgList.concat(message));
    // });
  }, []);

  return (
    <div className={styles.form}>
      <TextField
        className={styles.textField}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        value={msg}
        fullWidth={true}
        margin="normal"
        multiline
        label="Message"
        placeholder="Type your message..."
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.sendButton}
                onClick={(e) => {
                  // setMsg(e.target.value);
                  setMsg("");
                }}
              >
                <SendIcon color="white" />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
