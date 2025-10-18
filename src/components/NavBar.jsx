import { useState } from "react";

export default function NavBar({ search, setSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center sm:items-center m-4 sm:m-8 gap-4 sm:gap-8">
     
      <div className="flex items-center gap-6 text-white">
        <h1
          style={{ fontFamily: "PressStart" }}
          className="text-white text-lg sm:text-xl tracking-wide"
        >
          GAMEDEX
        </h1>
        <span className="hidden sm:block font-light text-gray-300">|</span>
        <h1 className="hidden sm:block font-light text-lg hover:text-purple-400 transition">
          Discovery
        </h1>
        <h1 className="hidden sm:block font-light text-lg hover:text-purple-400 transition">
          Games
        </h1>
      </div>

     
      <div className="w-full sm:w-auto">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search games..."
          className="w-full sm:w-72 md:w-80 px-5 py-2 rounded-2xl bg-white text-black placeholder-gray-600 outline-none shadow-md focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        />
      </div>
    </nav>
  );
}
