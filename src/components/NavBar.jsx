import { useState } from "react";

export default function NavBar({ search, setSearch }) {
    
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <div className="flex justify-between items-center m-8">
            <div className="flex items-center gap-6 text-white">
                <h1 style={{ fontFamily: "PressStart" }} className="text-white text-lg">
                    GAMEDEX
                </h1>
                <span className="font-light">|</span>
                <h1 className="font-light text-lg">Discovery</h1>
                <h1 className="font-light text-lg">Games</h1>
                <input
                    value={search}
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search games..."
                    className="w-260 px-6 py-2 rounded-2xl bg-white text-black placeholder-gray-600 outline-none shadow-md"
                />
            </div>
        </div>
    );
}