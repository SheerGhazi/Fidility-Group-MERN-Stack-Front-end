import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Partner from './Pages/Partner'
import ContactPage from './Pages/ContactPage'
import ConnectivityPage from './Pages/ConnectivityPage'
import EnergyPage from './Pages/EnergyPage'
import PhonePage from './Pages/PhonePage'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IoTPage from './Pages/IoTPage';
import Cloud from './Pages/Cloud';
import TelephonePage from './Pages/TelephonePage';
import PaymentPage from './Pages/PaymentPage';
import SupportPage from './Pages/SupportPage';
import AboutPage from './Pages/AboutPage';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Router>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/Partners" element={<Partner/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/Report" element={<SupportPage/>} />
        <Route path="/About" element={<AboutPage/>} />
      </Routes>
      <Routes>
      <Route path="/connectivity" element={<ConnectivityPage/>} />
        <Route path="/energy" element={<EnergyPage/>} />
        <Route path="/phone" element={<PhonePage/>} />
        <Route path="/IoT" element={<IoTPage/>} />
        <Route path="/cloud" element={<Cloud/>} />
        <Route path="/telephony" element={<TelephonePage/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
