import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login'
import Register from '../pages/register'
import Paginaprincipal from '../pages/paginaprincipal'
import Modificaciones from '../pages/modificaciones'
import AgregarP from '../pages/agregarP'
import EliminarP from '../pages/eliminarP'
import AgregarU from '../pages/agregarU'
import EliminarU from '../pages/eliminarU'
import ModificarP from '../pages/modificarP'
import ModificarU from '../pages/modificarU'


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Paginaprincipal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/modificaciones' element={<Modificaciones />} />
        <Route path='/eliminarP' element={<EliminarP/>} />
        <Route path='/agregarP' element={<AgregarP/>} />
        <Route path='/modificarP' element={<ModificarP/>} />
        <Route path='/eliminarU' element={<EliminarU/>} />
        <Route path='/agregarU' element={<AgregarU/>} />
        <Route path='/modificarU' element={<ModificarU/>} />
        
      </Routes>
    </Router>
  );
};

export default Routing;

