
import './App.css'
import { useData } from './hooks/useData'


function App() {


  const {data, loading, error} = useData(``)


  return (
    <>
     <h1>This is from marwan</h1>
    </>
  )
}

export default App
