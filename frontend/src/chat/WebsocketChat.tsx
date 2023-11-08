import React, { useContext, useState } from "react";
import { WebsocketContext } from "./WebsocketChatContext";

export const WebsocketChat = () => {
  const context = useContext(WebsocketContext);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue) {
      context.sendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>WebSocket Relay Chat</h2>
      <div
        style={{
          width: 300,
          height: 400,
          border: "1px solid black",
          padding: 10,
          overflow: "auto",
        }}
      >
        {context.messages.map((message, idx) => (
          <div key={idx}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: 300 }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
