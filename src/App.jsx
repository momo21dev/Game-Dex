import { useEffect, useState } from 'react'
import './App.css'
import { useApi } from './hooks/useApi'
import { useData } from './hooks/useData'
import GameCard from './components/GameCard'
import NavBar from './components/NavBar'

function App() {
  const { BASE_URL, API_KEY } = useApi()
  const [url, setUrl] = useState(`${BASE_URL}/games?key=${API_KEY}`)
  const { data, loading, error } = useData(url)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  //const filterdData = data?.results.filter(g => g.name.toLowerCase().includes(search.toLocaleLowerCase()))
  //search in server
  useEffect(() => {
    if (search.trim() !== '') {
      setUrl(`${BASE_URL}/games?key=${API_KEY}&search=${search}`)
    }
  }, [search])

  if (loading) return <p className="text-white text-center mt-10 text-xl">Loading...</p>
  if (error) return <p className="text-red-500 text-center mt-10 text-xl">Error: {error}</p>

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      {data && (
        <div className="flex flex-col justify-center items-center gap-8 mb-8 px-4 sm:px-6 md:px-10">


          <div className="grid 
                          grid-cols-1 
                          sm:grid-cols-2 
                          md:grid-cols-3 
                          lg:grid-cols-4 
                          gap-6 sm:gap-8 w-full max-w-7xl">
            {data.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 text-white text-base sm:text-xl mt-6 flex-wrap">
            <button
              className="bg-white text-black font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={data.previous === null}
              onClick={() => {
                if (data.previous !== null) {
                  setUrl(data.previous)
                  setPage(page - 1)
                }
              }}
            >
              Previous
            </button>

            <p className="bg-white text-black font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md select-none">
              {page}
            </p>

            <button
              className="bg-white text-black font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={data.next === null}
              onClick={() => {
                if (data.next !== null) {
                  setUrl(data.next)
                  setPage(page + 1)
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
