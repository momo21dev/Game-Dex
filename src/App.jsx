
import { useState } from 'react'
import './App.css'
import { useApi } from './hooks/useApi'
import { useData } from './hooks/useData'


function App() {
  const { BASE_URL, API_KEY } = useApi()
  const [url, setUrl] = useState(`${BASE_URL}/games?key=${API_KEY}`)
  const { data, loading, error } = useData(url)
  const { page, setPage } = useState(1)
  return (
    <>
      {data &&
        <div>
          <div>
            {data?.results.map(game =>
              <div key={game.slug}>
                <h1 className='text-white'>{game.name}</h1>
              </div>
            )}
          </div>

          <div className='text-white text-4xl'>
            <button
              disabled={data.previous === null}
              onClick={() => {
                if (data.previous !== null) {
                  setUrl(data.previous)
                  setPage(page - 1)
                }
              }}>
              prev</button>
            <h1>{page}</h1>
            <button
              disabled={data.next === null}
              onClick={() => {
                if (data.next !== null) {
                  setUrl(data.next)
                }
              }}
            >Next</button>
          </div>
        </div>
      }
    </>
  )
}

export default App
