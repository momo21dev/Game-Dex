import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SingleGame from './components/SingleGame'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game/:id' element={<SingleGame />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App
