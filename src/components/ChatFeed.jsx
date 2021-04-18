import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import { memo } from "react";
import "./style.css";
const ChatFeed = memo((props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
  // chats가 존재하면, 활성화된 chat을 찾습니다

  console.log("ChatFeed render()");
  console.log("chats>", chats);
  console.log("userName>", userName);
  console.log("activeChat>", activeChat);
  console.log("messages>", messages);
  const renderMessages = () => {
    const keys = Object.keys(messages); //messages 배열의 id값만 뽑아냅니다
    console.log("keys >", keys);

    return keys.map((key, i) => {
      const message = messages[key];
      console.log("message >", message);
      const lastMessageKey = i === 0 ? null : keys[i - 1];
      console.log("lastMessageKey >", lastMessageKey);

      const isMyMessage = userName === message.sender.username;
      console.log("isMyMessage >", isMyMessage);

      return (
        <div key={`msg_${i}`} className="message-frame">
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              //내 메세지 인지 아닌지에 따라서 스타일 다르게 적용
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading ~~";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        {/* chat이 있으면 title의 속성을 가져옵니다 */}
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div className="message-container" />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
});

export default ChatFeed;
