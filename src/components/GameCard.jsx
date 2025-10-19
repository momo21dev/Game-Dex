import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/game/${game.id}`)}
      key={game.slug}
      className="w-full sm:w-64 md:w-72 bg-[#1c1c1c] text-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >

      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-40 sm:h-44 md:h-48 object-cover"
      />


      <div className="p-3 sm:p-4 flex flex-col gap-3">
        <h1
          style={{ fontFamily: "anton" }}
          className="text-xl sm:text-xl  text-[#f5f5f5] leading-5 truncate"
        >
          {game.name}
        </h1>


        <div className="flex justify-between text-[10px] sm:text-xs text-gray-400">
          <p>⭐ {game.rating || "N/A"}</p>
          <p>{game.genres?.[0]?.name || "Unknown"}</p>
        </div>


        <div className="flex flex-wrap items-center gap-2 mt-1">
          {game.platforms?.slice(0, 3).map((p) => (
            <span
              key={p.platform.id}
              className="bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium"
            >
              {p.platform.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
