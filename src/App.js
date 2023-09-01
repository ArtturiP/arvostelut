import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HaeEnergiajuomat from './components/HaeEnergiajuomat';
import Ylävalikko from './components/Ylävalikko';
import Kotisivu from './components/Kotisivu';
import EnergiajuomaLista from './components/EnergiajuomaLista';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ylävalikko />}>
          <Route index element={<Kotisivu />} />
          <Route path="energiajuomat" element={<EnergiajuomaLista />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;