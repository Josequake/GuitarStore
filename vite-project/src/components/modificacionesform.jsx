import React from "react";
import { Link } from "react-router-dom";
import '../styles/modificaciones.css'


const ModificacionesForm = () => {


  return (
    <div className='content'>
      <h2 className="titulo">What would you like to do!</h2>
      <div className="pmodificaciones" >
      <button className="boton"><Link to='/agregarP' className="link">Add Product</Link></button>
      </div>
      <div className="pmodificaciones" >
      <button className="boton"><Link to='/agregarU' className="link">Add an Admin</Link></button>
      </div>
      <div className="pmodificaciones" >
      <button className="boton"><Link to='/BD'className="link" >Data base</Link></button>
      </div>
      <div className="pmodificaciones" >
      <button className="boton"><Link to='/' className="link">Home</Link></button>
      </div>
      
    </div>
  );
};

export default ModificacionesForm;
