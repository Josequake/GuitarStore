import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login'
import Register from '../pages/register'
import Paginaprincipal from '../pages/paginaprincipal'
import Modificaciones from '../pages/modificaciones'
import AgregarP from '../pages/agregarP'
import AgregarU from '../pages/agregarU'
import Pago from '../pages/pago'
import BD from '../pages/BD'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Paginaprincipal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/modificaciones' element={<Modificaciones />} />
        <Route path='/agregarP' element={<AgregarP/>} />
        <Route path='/agregarU' element={<AgregarU/>} />
        <Route path='/BD' element={<BD/>} />
        <Route path='/pago' element={<Pago/>} />
      </Routes>
    </Router>
  );
};

export default Routing;

