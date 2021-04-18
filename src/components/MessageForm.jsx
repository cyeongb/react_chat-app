import { memo } from "react";
import "./style.css";
const MessageForm = memo(() => {
  console.log("MessageForm render()");

  return <div>MessageForm</div>;
});

export default MessageForm;
