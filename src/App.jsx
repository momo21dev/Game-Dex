
import './App.css'
import { useData } from './hooks/useData'


function App() {
  //store imp data
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const API_KEY = import.meta.env.VITE_API_KEY


  const { data, loading, error } = useData(`${BASE_URL}/games?key=${API_KEY}`)


  return (
    <>
      {data?.results.map(game =>
        <div>
          <h1 className='text-white'>{game.slug}</h1>
        </div>
      )}
    </>
  )
}

export default App
