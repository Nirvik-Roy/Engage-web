import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Mainlayout from './View/Mainlayout/Mainlayout'
import Home from './View/Home/Home'
import EngagementSolutions from './View/EngagementSolutions/EngagementSolutions'
import Aboutengage from './View/Aboutengage/Aboutengage'
import Ongoingengage from './View/Ongoingengage/Ongoingengage'
import Onboarding from './View/Onboarding/Onboarding'
import Facilitatedteam from './View/Facilitatedteam/Facilitatedteam'
import Gameslayout from './View/Games/Gameslayout/Gameslayout'
import Gameslibrary from './View/Games/Gameslibrary/Gameslibrary'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainlayout/>}>
             <Route path='/' element={<Home/>} />
             <Route path='/solutions/engagement' element={<EngagementSolutions/>}/>
             <Route path='/about' element={<Aboutengage/>}/>
             <Route path='/solutions/ongoing-engage' element={<Ongoingengage/>}/> 
             <Route path='/solutions/onboarding' element={<Onboarding/>}/>
             <Route path='/solutions/facilitated-team' element={<Facilitatedteam/>}/>
             <Route path='/games' element={<Gameslayout/>}>
                 <Route path='library' element={<Gameslibrary/>}/>
             </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
