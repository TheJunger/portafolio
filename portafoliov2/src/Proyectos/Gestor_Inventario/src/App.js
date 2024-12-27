import './App.css';
import { Login } from './Login';
import { MainMenu } from './Mainmenu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function GestorInventario() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');


  return (
    <div id='GestorInventario' className='container'>
        <Routes>
          <Route exact path="/" element={<Login setToken={(token) => {setToken(token); localStorage.setItem('token', token);
        }}/>} />
          <Route path="/main-menu" element={<MainMenu token={token}/>} />
        </Routes>
    </div>
  );
}

export {GestorInventario};
