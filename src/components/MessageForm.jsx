import { useState } from "react";
import "./style.css";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  //메세지를 쓰고 보낼수 있는 컴포넌튼
  console.log("MessageForm render()");

  const [value, setValue] = useState("");
  const { chatId, creds } = props;

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

  const handleUpload = (e) => {
    //img같은거 올릴때 쓰는 api
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
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
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        className="message-input"
        type="file"
        multiple={false}
        onChange={handleUpload}
      />
      <button className="send-btn" type="submit">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
