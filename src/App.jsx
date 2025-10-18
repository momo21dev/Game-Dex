
import './App.css'
import { useApi } from './hooks/useApi'
import { useData } from './hooks/useData'


function App() {
  const {BASE_URL, API_KEY} = useApi()
  const { data, loading, error } = useData(`${BASE_URL}/games?key=${API_KEY}`)


  return (
    <>
     <div>
      {data?.results.map(game =>
        <div>
          <h1 className='text-white' key={game.slug}>{game.name}</h1>
        </div>
      )}
    </div>

    <div>
      <button>prev</button>
      
    </div>
    </>
   
  )
}

export default App
