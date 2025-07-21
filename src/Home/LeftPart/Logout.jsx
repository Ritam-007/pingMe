import React from "react";
import { FaSearch } from "react-icons/fa";

function Logout() {
  return (
    <div className="h-[10vh] ">
        <div className="search-container px-6 py-4">
      <form action="" className="">
        <div className="flex space-x-3">
          <label className="border-2 border-green-700 rounded-lg text-lg text-center flex items-center gap-2 w-[80%]">
            <input type="search" className="grow outline-none px-5 text-green-50" placeholder="Search" />
          </label>
          <button className="">
            <FaSearch className="text-4xl p-1 hover:bg-green-700 rounded-full duration-300 hover:cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Logout;
