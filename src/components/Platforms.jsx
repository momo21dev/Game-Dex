import { useEffect, useState } from "react";

export default function Platforms({ setShowPlatforms, showPlatforms, setPlatforms }) {
  const [data, setData] = useState([]);

  async function fetchPlatforms() {
    const api = `https://api.rawg.io/api/platforms?key=${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(api);
    const json = await res.json();
    setData(json.results);
  }

  useEffect(() => {
    fetchPlatforms();
  }, []);

  return (
    <div className="relative inline-block text-left">
     
      <button
        onClick={() => setShowPlatforms(!showPlatforms)}
        className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-purple-700 transition-all duration-300 text-sm sm:text-base"
      >
        Platforms
      </button>

      
      {showPlatforms && (
        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          {data.length > 0 ? (
            data.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setPlatforms(p.id);
                  setShowPlatforms(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-sm"
              >
                {p.name}
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500 text-sm">Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}
