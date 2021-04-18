import React from "react";
import "./style.css";
const TheirMessage = ({ message, lastMessage }) => {
  console.log("TheirMessage render()");

  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender;
  console.log("isFirstMessageByUser>", isFirstMessageByUser);
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0}
      ? (
      <img
        src={message.attachments[0].file}
        alt="message-attachement"
        className="message-image"
        style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
      />
      ) :(
      <div
        className="their-message"
        style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
      >
        {message.text}
      </div>{" "}
      )
    </div>
  );
};

export default TheirMessage;
