import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <nav className="bg-red-600 dark:bg-color-purple text-white px-6 py-4 flex items-center justify-between shadow-md transition">
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" alt="ShopHaven Logo" className="w-8 h-8 rounded-full" />
        <span className="text-lg font-bold">ShopHaven</span>
      </div>

      <div className="flex items-center gap-8">
        <Link to="/home" className="hover:underline text-white hover:text-blue-200 dark:hover:text-gray-300 transition">
          Home
        </Link>
        <Link to="/explore" className="hover:underline text-white hover:text-blue-200 dark:hover:text-gray-300 transition">
          Explore
        </Link>
        <Link to="/" className="hover:underline text-white hover:text-blue-200 dark:hover:text-gray-300 transition">
          Sign Out
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/cart"
          className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition"
        >
          🛒
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
