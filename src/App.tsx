import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddInfo from './components/AddInfo';
import EditInfo from './components/EditInfo';
import Header from './components/Header/Header';
import Login from './components/login/login';
import LoginRoute from './routes/LoginRoute';
import Private from './routes/Private';
import PrivateRouteTest from './components/PrivateRouteTest';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/addinfo' element={<AddInfo />} />

          <Route path='/editinfo/:id' element={<EditInfo />} />

          <Route
            path='/login'
            element={<LoginRoute setIsAuth={setIsAuth} />} />

          <Route path='/private' element={<Private isAuth={isAuth}><PrivateRouteTest /></Private>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
