import React from "react";
import { IoSend } from "react-icons/io5";

function TypeSend() {
  return (
    <div className="flex items-center justify-center space-x-5 h-[7vh] text-center bg-gray-800 p-4 border-t-4 border-gray-700/5">
      <div className="w-[70%]">
          <input type="text" className="border-2 border-gray-300 px-4 py-2 rounded-lg outline-none w-full" placeholder="Type here" />
      </div>

      <button className="hover:cursor-pointer hover:scale-110 duration-100">
        <IoSend className="text-4xl" />
      </button>
    </div>
  );
}

export default TypeSend;
