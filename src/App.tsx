import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddInfo from './components/AddInfo';
import EditInfo from './components/EditInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addinfo' element={<AddInfo />} />
        <Route path='/editinfo/:id' element={<EditInfo />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
