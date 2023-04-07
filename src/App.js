import React from 'react';
import StartPage from './components/StartPage';
import Game from './components/Game';
import EndPage from './components/EndPage';
import {Route,Routes} from "react-router-dom";

export default function App() {
  
  return (
    <div className='p-0 m-0'>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/game' element={<Game />}/>
        <Route path='/endgame' element={<EndPage />}/>
      </Routes>
    </div>
  );
}
