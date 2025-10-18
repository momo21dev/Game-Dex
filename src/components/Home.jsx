import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useData } from "../hooks/useData";
import Pagination from "./Pagination";
import NavBar from "./NavBar";
import GameCard from "./GameCard";
import SortBy from "./SortBy";
import Platforms from "./Platforms";

export default function Home() {
    const { BASE_URL, API_KEY } = useApi();
    const [url, setUrl] = useState(`${BASE_URL}/games?key=${API_KEY}`);
    const { data, loading, error } = useData(url);
    const [search, setSearch] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [sortBy, setSortBy] = useState("");
    const [showPlatforms, setShowPlatforms] = useState(false);
    const [platform, setPlatform] = useState("");

    // Search effect
    useEffect(() => {
        if (search.trim() === "") {
            setUrl(`${BASE_URL}/games?key=${API_KEY}`);
        } else {
            setUrl(`${BASE_URL}/games?key=${API_KEY}&search=${search}`);
        }
    }, [search]);

    // Sort effect
    useEffect(() => {
        if (sortBy === "") {
            setUrl(`${BASE_URL}/games?key=${API_KEY}`);
        } else {
            setUrl(`${BASE_URL}/games?key=${API_KEY}&ordering=${sortBy}`);
        }
    }, [sortBy]);

    // Platforms effect
    useEffect(() => {
        if (platform === "") {
            setUrl(`${BASE_URL}/games?key=${API_KEY}`);
        } else {
            setUrl(`${BASE_URL}/games?key=${API_KEY}&platforms=${platform}`);
        }
    }, [platform]);

    // Loading & Error handling
    if (loading)
        return <p className="text-white text-center mt-12 text-xl">Loading...</p>;
    if (error)
        return (
            <p className="text-red-500 text-center mt-12 text-xl">Error: {error}</p>
        );

    // JSX
    return (
        <>
           
            <div className="flex flex-col sm:flex-row justify-center  items-center px-6 sm:px-12 py-6 gap-4 sm:gap-12 sticky top-0 z-20">
                <NavBar search={search} setSearch={setSearch} />
                <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
                    <SortBy
                        setSortBy={setSortBy}
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                    />
                    <Platforms
                        showPlatforms={showPlatforms}
                        setPlatforms={setPlatform}
                        setShowPlatforms={setShowPlatforms}
                    />
                </div>
            </div>

            
            {data && (
                <div className="flex flex-col justify-center items-center gap-10 mb-16 px-4 sm:px-8 md:px-12">
                    <div
                        className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        gap-8 
                        w-full max-w-7xl"
                    >
                        {data.results.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>

                    <Pagination setUrl={setUrl} data={data} />
                </div>
            )}
        </>
    );
}
