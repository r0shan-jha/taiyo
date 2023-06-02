import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import ChartsAndMaps from '../components/ChartsAndMaps';
import Contacts from '../components/Contacts';


const Routers = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
           <Route path="/taiyo" element={<Contacts />} />
           <Route path="/taiyo/chartsandmaps" element={<ChartsAndMaps />} />
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Routers
