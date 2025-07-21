import React from "react";
import User from "./User";

function Users() {
  return (
    <div className="">
      <h1 className="px-6 py-2 text-green-50 font-semibold bg-green-800 rounded-xl">
        Chatas
      </h1>
      <div className="flex-1 py-2 overflow-y-auto hide-scrollbar" style={{maxHeight: 'calc(84vh - 10vh)'}}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default Users;
