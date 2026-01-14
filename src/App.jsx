import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Mainlayout from './View/Mainlayout/Mainlayout'
import Home from './View/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainlayout/>}>
             <Route path='/' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
