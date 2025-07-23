import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

function Logout() {
  return (
    <div className="h-[8vh] flex items-center justify-center bg-green-800 border-t-4 border-green-50/5">
      <div className="flex items-center justify-center">
        <AiOutlineLogout className="text-5xl text-gray-50 p-2 hover:bg-green-700 cursor-pointer duration-300 rounded-full"/>
      </div>
    </div>
  );
}

export default Logout;
