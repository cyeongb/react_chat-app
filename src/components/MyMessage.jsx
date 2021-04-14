import React from "react";

const MyMessage = ({ message }) => {
  console.log("MyMessage render()");
  console.log("props로 받아온 message > ", message);

  if (message?.attachments?.length > 0) {
    return <img src={message.attachments[0].file} />;
    //30:27
  }
  return <div>MyMessage</div>;
};

export default MyMessage;
