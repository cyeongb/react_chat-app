import React from "react";
import "./style.css";
const MyMessage = ({ message }) => {
  console.log("MyMessage render()");
  console.log("props로 받아온 message > ", message);

  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachement"
        className="message-image"
      />
    );
    //30:27
  }
  return <div className="message">{message.text}</div>;
};

export default MyMessage;
