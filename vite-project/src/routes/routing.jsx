import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login'
import Register from '../pages/register'
import Paginaprincipal from '../pages/paginaprincipal'
import Contactenos from '../pages/contactenos'
import Modificaciones from '../pages/modificaciones'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Paginaprincipal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactenos' element={<Contactenos />} />
        <Route path='/modificaciones' element={<Modificaciones />} />
        
      </Routes>
    </Router>
  );
};

export default Routing;

