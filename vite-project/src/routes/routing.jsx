import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login'
import Register from '../pages/register'
import Paginaprincipal from "../pages/paginaprincipal"

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/paginaprincipal' element={<Paginaprincipal />} />
      </Routes>
    </Router>
  );
};

export default Routing;

