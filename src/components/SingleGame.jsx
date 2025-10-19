import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";

export default function SingleGame() {
  const { id } = useParams();
  const { BASE_URL, API_KEY } = useApi();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`/api/api/games/${id}?key=${API_KEY}`);
        const data = await response.json();
        setGame(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchGame();
  }, [id]);

  if (loading)
    return <p className="text-white text-center mt-12 text-xl">Loading...</p>;
  if (error)
    return (
      <p className="text-red-500 text-center mt-12 text-xl">
        Error: {error}
      </p>
    );

  const shortDesc = game.description_raw?.slice(0, 300) || "";
  const hasLongDesc = game.description_raw?.length > 300;

  return (
    <div className="text-white flex flex-col items-center px-6 py-12 max-w-7xl mx-auto">
      {/* اسم اللعبة */}
      <h1 className="text-5xl font-extrabold mb-10 text-center tracking-wide">
        {game.name}
      </h1>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col md:flex-row gap-10 w-full justify-between items-start">
        {/* الصورة والوصف على الشمال */}
        <div className="flex-1 flex flex-col items-start">
          <img
            src={game.background_image}
            alt={game.name}
            className="rounded-2xl shadow-2xl mb-6 w-full max-w-3xl border border-gray-700"
          />

          {/* وصف اللعبة */}
          <div className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            <p>{showFullDesc ? game.description_raw : shortDesc}</p>
            {hasLongDesc && (
              <button
                className="text-blue-400 mt-3 hover:text-blue-300"
                onClick={() => setShowFullDesc(!showFullDesc)}
              >
                {showFullDesc ? "Show less ▲" : "Show more ▼"}
              </button>
            )}
          </div>
        </div>

        {/* الكروت الجانبية على اليمين */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
            <p className="text-gray-400">⭐ Rating</p>
            <p className="text-xl font-semibold">{game.rating}/5</p>
            <p className="text-sm text-gray-500">
              ({game.ratings_count} reviews)
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
            <p className="text-gray-400">🎯 Metacritic</p>
            <p className="text-xl font-semibold">
              {game.metacritic || "N/A"}
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
            <p className="text-gray-400">🕹️ Playtime</p>
            <p>{game.playtime ? `${game.playtime} hours` : "N/A"}</p>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
            <p className="text-gray-400">🎮 Platforms</p>
            <p>{game.platforms?.map((p) => p.platform.name).join(", ")}</p>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
            <p className="text-gray-400">🏷️ Genres</p>
            <p>{game.genres?.map((g) => g.name).join(", ")}</p>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
            <p className="text-gray-400">🏢 Developer</p>
            <p>{game.developers?.map((d) => d.name).join(", ") || "N/A"}</p>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
            <p className="text-gray-400">📦 Publisher</p>
            <p>{game.publishers?.map((p) => p.name).join(", ") || "N/A"}</p>
          </div>

          {game.website && (
            <div className="bg-[#1e1e1e] rounded-2xl p-4 shadow-md border border-gray-700">
              <p className="text-gray-400">🌍 Website</p>
              <a
                href={game.website}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 break-all"
              >
                {game.website}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* صور اللعبة (Screenshots) */}
      <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold mb-4">📸 Screenshots</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {game.short_screenshots?.slice(0, 8).map((s) => (
            <img
              key={s.id}
              src={s.image}
              alt="screenshot"
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
