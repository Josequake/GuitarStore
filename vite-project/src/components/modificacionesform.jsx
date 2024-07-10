import React from "react";
import { Link } from "react-router-dom";
import '../styles/modificaciones.css'


const ModificacionesForm = () => {


  return (
    <div className='container'style={{border:'1px solid black',borderRadius:'7px'}}>
      <h2 className="titulo">What would you like to do!</h2>
      <div className="col-md-12 row"></div>
      <div className="col-md-4">
      <div className="col-md-6" style={{textAlign:'center'}} >
      <button className="boton"><Link to='/agregarP' className="link">Add Product</Link></button>
      </div>
      <div className="col-md-6" style={{textAlign:'center'}} >
      <button className="boton"><Link to='/agregarU' className="link">Add an Admin</Link></button>
      </div>
      <div className="col-md-6" style={{textAlign:'center'}} >
      <button className="boton"><Link to='/BD'className="link" >Data base</Link></button>
      </div>
      <div className="col-md-6" style={{textAlign:'center'}} >
      <button className="boton"><Link to='/' className="link">Home</Link></button>
      </div>
      </div>
      </div>
    
  );
};

export default ModificacionesForm;
