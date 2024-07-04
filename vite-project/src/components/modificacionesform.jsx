import React from "react";
import { Link } from "react-router-dom";
import '../styles/modificaciones.css'
import Img from '../assets/img/engranaje.avif'

const ModificacionesForm = () => {


  return (
    <div className="div">
      <h2 className="h2">Que desea hacer administrador!</h2>
      <p className="paragraph">
      <button className="button"><Link to='/agregarP' className="link">Agregar Producto</Link></button>
      </p>
      <p>
      <button className="button"><Link to='/eliminarP' className="link">Eliminar Producto</Link></button>
      </p>
      <p>
      <button className="button"><Link to='/modificarP' className="link">Modificar Producto</Link></button>
      </p>
      <p>
      <button className="button"><Link to='/agregarU' className="link">Agregar Administrador</Link></button>
      </p>
      <p>
      <button className="button"><Link to='/eliminarU' className="link">Eliminar Administrador</Link></button>
      </p>
      <p>
      <button className="button"><Link to='/modificarU' className="link">Modificar Administrador</Link></button>
      </p>
      <p>
      <button className="button"><Link to='/'>Pagina Principal</Link></button>
      </p>
    </div>
  );
};

export default ModificacionesForm;
