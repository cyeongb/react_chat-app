import { memo, useState } from "react";
import "./style.css";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = memo((props) => {
  //메세지를 쓰고 보낼수 있는 컴포넌튼
  console.log("MessageForm render()");

  const [value, setValue] = useState("");
  const [chatId, creds] = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    console.log("text>", text);
    console.log("{text}>", { text });
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      // sendMessage()라는 컴포넌트에 양식에 맞게  props들을 전달합니다.
    }

    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="input message.."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
});

export default MessageForm;
