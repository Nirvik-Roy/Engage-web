import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Mainlayout from './View/Mainlayout/Mainlayout'
import Home from './View/Home/Home'
import EngagementSolutions from './View/EngagementSolutions/EngagementSolutions'
import Aboutengage from './View/Aboutengage/Aboutengage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainlayout/>}>
             <Route path='/' element={<Home/>} />
             <Route path='/solutions/engagement' element={<EngagementSolutions/>}/>
             <Route path='/about' element={<Aboutengage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
