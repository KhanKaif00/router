import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useState } from 'react';
import Private from './components/Private';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="bg-black w-screen h-screen flex flex-col">
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />

     
        <Routes>
          <Route path='/' element={<Home isLoggedin={isLoggedin} />} />
          <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin} />} />
          <Route path='/signup' element={<Signup setIsLoggedin={setIsLoggedin} />} />
          <Route path='/dashboard' element={<Private isLoggedin={isLoggedin}>

            <Dashboard></Dashboard>
          </Private>} />
        </Routes>
      
    </div>
  );
}

export default App;
