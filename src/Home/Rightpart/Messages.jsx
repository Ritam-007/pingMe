import React from "react";
import Message from "./Message";

function Messages() {
  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar" style={{ minHeight:"calc(92.5vh - 8vh)" }}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
