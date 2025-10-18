export default function SortBy({ setShowMenu, showMenu, setSortBy }) {
    return (
        <div className="relative inline-block text-left">
            
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-purple-700 transition-all duration-300 text-sm sm:text-base"
            >
                Sort By
            </button>

            
            {showMenu && (
                <div
                    className="absolute right-0 mt-2 sm:mt-3 bg-white text-black rounded-lg shadow-lg w-36 sm:w-40 z-20 border border-gray-200"
                >
                    <button
                        onClick={() => {
                            setSortBy("-rating");
                            setShowMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition"
                    >
                         Highest Rated
                    </button>
                    <button
                        onClick={() => {
                            setSortBy("-released");
                            setShowMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition"
                    >
                         Newest
                    </button>
                    <button
                        onClick={() => {
                            setSortBy("name");
                            setShowMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition"
                    >
                         A → Z
                    </button>
                    <button
                        onClick={() => {
                            setSortBy("-popularity");
                            setShowMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 transition"
                    >
                        Popularity
                    </button>
                </div>
            )}
        </div>
    );
}
