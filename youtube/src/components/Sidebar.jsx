import React from "react";
import { Home, PlayCircle, Tv, Music, Gamepad2, Film } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
const isMenuOpen = useSelector(store =>store.app.isMenuOpen)
if (!isMenuOpen) return null;
  return (
    <div className="p-4 shadow-lg bg-white h-screen w-60">
      {/* Navigation Links */}
      <ul className="mt-3 space-y-3">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Home className="h-5 w-5" />
          <span>
            <Link to={"/"}> Home</Link>
           </span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <PlayCircle className="h-5 w-5" />
          <span>Shorts</span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Tv className="h-5 w-5" />
          <span>Live</span>
        </li>
      </ul>

      {/* Subscriptions */}
      <h1 className="font-bold text-sm text-gray-500 mt-5">Subscriptions</h1>
      <ul className="mt-2 space-y-3">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Music className="h-5 w-5" />
          <span>Music</span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Gamepad2 className="h-5 w-5" />
          <span>Gaming</span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Film className="h-5 w-5" />
          <span>Movies</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
