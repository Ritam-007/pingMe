import React from "react";

function Message() {
  return (
    <div>
      <div className="p-4">
        {/* <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-warning rounded-xl">
            To be on the Council at your age.
          </div>
        </div> */}
        
        {/* <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success rounded-xl">
            You have been given a great honor.
          </div>
        </div> */}

        <div className="chat-start">
            <div className="rounded-br-xl rounded-t-xl bg-yellow-400 px-4 p-2 text-gray-900 w-fit">
                Hi, I am Sana
            </div>
        </div>

        <div className="chat-end">
            <div className="rounded-bl-xl rounded-t-xl bg-green-600 px-4 p-2 text-gray-50 w-fit">
                Hi, I am Ritam
            </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
