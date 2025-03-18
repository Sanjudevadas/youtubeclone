import React from "react";
import hamburger from "../assets/hamburger.png";
import logo from "../assets/youtube.png";
import usericon from "../assets/usericon.webp";

const Head = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-12 p-3 items-center shadow-md sticky top-0 bg-white w-full">
      {/* Left - Hamburger & Logo */}
      <div className="flex items-center col-span-1 md:col-span-2">
        <img className="h-6 cursor-pointer md:mr-3" src={hamburger} alt="menu" />
        <img className="h-8 cursor-pointer" src={logo} alt="YouTube Logo" />
      </div>

      {/* Middle - Search Bar */}
      <div className="col-span-1 md:col-span-8 flex justify-center">
        <div className="flex border border-gray-300 rounded-full overflow-hidden w-full md:w-[500px]">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-full outline-none text-sm md:text-base"
          />
          <button className="px-4 bg-gray-100 border-l hover:bg-gray-200">
            🔍
          </button>
        </div>
      </div>

      {/* Right - User Icon */}
      <div className="col-span-1 md:col-span-2 flex justify-end">
        <img className="h-8 w-8 rounded-full cursor-pointer" src={usericon} alt="User Icon" />
      </div>
    </div>
  );
};

export default Head;
