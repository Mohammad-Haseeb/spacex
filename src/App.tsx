import React from 'react';
import MissionList from './components/MissionList/index';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CompoleteDetails} from './components/FinalMissionDetails/index'
import logo from './logo.png';

function App() {
  return (
        <>
            <img src={logo}  className="logo" alt="logo"/>
            <br/>
     <Routes>
      <Route path="/" element={<MissionList />} />
      <Route path="missionDetails/:invoiceId" element={<CompoleteDetails/>} />
     
    </Routes>
     </>
    
  );
}

export default App;
