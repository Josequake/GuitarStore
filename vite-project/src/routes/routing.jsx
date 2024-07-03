import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login'
import Register from '../pages/register'
import Paginaprincipal from '../pages/paginaprincipal'
import Contactenos from '../pages/contactenos'
import Modificaciones from '../pages/modificaciones'
import Agregar from '../pages/agregar'
import Eliminar from '../pages/eliminar'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Paginaprincipal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactenos' element={<Contactenos />} />
        <Route path='/modificaciones' element={<Modificaciones />} />
        <Route path='/eliminar' element={<Eliminar/>} />
        <Route path='/agregar' element={<Agregar />} />
        
      </Routes>
    </Router>
  );
};

export default Routing;

