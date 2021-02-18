import React from 'react'

export default function MessageList() {
  return (
    <div className={styles.messageList}>
      {data.messages.map((message) => (
        <Message
          key={message._id}
          me={message.senderId === window.sessionStorage.getItem("id")}
          time={message.time}
        >
          {message.contents}
        </Message>
      ))}
    </div>
  );
}
