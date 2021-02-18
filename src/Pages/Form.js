import React, { useState } from "react";
import { InputAdornment, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styles from "./Form.module.scss";

export default function Form() {
  const [contents, setContents] = useState("");
  // const mutaition = useMutation(sendMessage, {
  //   variables: {
  //     senderId: window.sessionStorage.getItem("id"),
  //     receiverId: chatId,
  //     contents,
  //     time: new Date(),
  //   },
  // });

  return (
    <div className={styles.form}>
      <TextField
        className={styles.textField}
        onChange={(e) => {
          setContents(e.target.value);
        }}
        value={contents}
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
                onClick={() => {
                  setContents("");
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
