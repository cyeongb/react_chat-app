import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="6bec4eb0-402b-4d50-b58f-9adc9d3241be"
      userName="cat1"
      userSecret="1234"
      renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
    />
  );
};

export default App;
