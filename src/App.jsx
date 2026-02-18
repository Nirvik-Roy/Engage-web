import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
import Faq from './View/Faq/Faq'
import RefundPolicy from './View/RefundPolicy/RefundPolicy'
import TermsConditions from './View/TermsConditions/TermsConditions'
import PrivacyPolicy from './View/PrivacyPolicy/PrivacyPolicy'
import Contact from './View/Contact/Contact'
import { useEffect, useState } from 'react'
import Gamesexperience from './View/Games/Gamesexperience/Gamesexperience'
import Ebookmodal from './View/EbookModal/Ebookmodal'
import { Toaster } from 'react-hot-toast'
import Checkout from './View/Checkout/Checkout'
import Engagelayout from './View/Engageexperience/Engagelayout'
import Engageexperience from './View/Engageexperience/Engageexperience'
import NgageLive from './View/NgageLive/NgageLive'
function App() {
  const [showModal, setShowModal] = useState(false);
  const [isModalClosed,setisModalClosed] = useState(false)
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: '0',
      behavior: 'instant'
    })
  }, [location.pathname])

   
  useEffect(() => {
    console.log('hello')
    const timeOut = setTimeout(() => {
      setShowModal(true);
      setisModalClosed(true)
    }, 15000); // 1 minutes in ms

    return () => clearTimeout(timeOut);
  }, []);



  // useEffect(() => {
  //   if(isModalClosed){
  //     const interval = setInterval(() => {
  //       setShowModal(true);
  //     }, 2 * 60 * 1000); // 2 minutes in ms

  //     return () => clearInterval(interval);
  //   }
  // }, [isModalClosed]);

  return (
    <>
    <Toaster position='top-left'/>
      {showModal && <Ebookmodal setShowModal={setShowModal}/>}
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/solutions/engagement' element={<EngagementSolutions />} />
          <Route path='/about-engage' element={<Aboutengage />} />
          <Route path='/solutions/ongoing-engage' element={<Ongoingengage />} />
          <Route path='/solutions/onboarding' element={<Onboarding />} />
          <Route path='/solutions/facilitated-team' element={<Facilitatedteam />} />
          <Route path='/solutions/ngage-live' element={<NgageLive/>}/>
          <Route path='/games' element={<Gameslayout />}>
            <Route path='library' element={<Gameslibrary />} />
            <Route path='experience' element={<Gamesexperience/>}/>
          </Route>

          <Route path='/engage' element={<Engagelayout/>}>
            <Route path='experience' element={<Engageexperience/>}/>
          </Route>
          <Route path='/faq' element={<Faq />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
