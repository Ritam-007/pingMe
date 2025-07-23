import React from "react";

function ChatUser() {
  return (
    <div className="flex space-x-5 items-center justify-center bg-gray-800 hover:bg-gray-700 h-[8vh] duration-300 cursor-pointer">
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>
      <div>
        <h1 className=" text-lg font-bold">Ritam</h1>
        <span className="text-xs">Status</span>
      </div>
    </div>
  );
}

export default ChatUser;
