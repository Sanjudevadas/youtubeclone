import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

import hamburger from "../assets/hamburger.png";
import logo from "../assets/youtube.png";
import usericon from "../assets/usericon.webp";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      console.log("API Call " + searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1] || []);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-12 p-3 items-center shadow-md sticky top-0 bg-white w-full">
      {/* Left - Hamburger & Logo */}
      <div className="flex items-center col-span-1 md:col-span-2">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer md:mr-3"
          src={hamburger}
          alt="menu"
        />
        <img className="h-8 cursor-pointer" src={logo} alt="YouTube Logo" />
      </div>

      {/* Middle - Search Bar */}
      <div className="col-span-1 md:col-span-8 flex justify-center relative">
        <div className="flex border border-gray-300 rounded-full overflow-hidden w-full md:w-[500px]">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="px-4 py-2 w-full outline-none text-sm md:text-base"
          />
          <button className="px-4 bg-gray-100 border-l hover:bg-gray-200">🔍</button>
        </div>
        {/* Search Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute top-12 left-0 w-full md:w-[500px] bg-white shadow-lg border rounded-lg z-50">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => setSearchQuery(suggestion)}
              >
                🔍 {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right - User Icon */}
      <div className="col-span-1 md:col-span-2 flex justify-end">
        <img className="h-8 w-8 rounded-full cursor-pointer" src={usericon} alt="User Icon" />
      </div>
    </div>
  );
};

export default Head;
