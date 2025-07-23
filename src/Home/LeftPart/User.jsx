import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-5 rounded-xl py-3 px-8 hover:bg-green-700 duration-300 cursor-pointer items-center">
        <div className="avatar avatar-online">
          <div className="w-14 rounded-full">
            <img
              src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Ritam</h1>
          <span>palritam123@dev.com</span>
        </div>
      </div>
    </div>
  );
}

export default User;
