import { memo } from "react";

const MessageForm = memo(() => {
  console.log("MessageForm render()");

  return <div>MessageForm</div>;
});

export default MessageForm;
