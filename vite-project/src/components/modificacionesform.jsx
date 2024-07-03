import React from "react";
import { Link } from "react-router-dom";


const ModificacionesForm = () => {


  return (
    <div>
      <h2>Que desea hacer administrador!</h2>
      <button><Link to='/agregarP'>Agregar producto</Link></button>
      <button><Link to='/eliminarP'>Eliminar producto</Link></button>
      <button><Link to='/modificarP'>Modificar producto</Link></button>
      <button><Link to='/agregarU'>Agregar Administrador</Link></button>
      <button><Link to='/eliminarU'>Eliminar Administrador</Link></button>
      <button><Link to='/modificarU'>Modificar Administrados</Link></button>
      <button><Link to='/'>Pagina Principal</Link></button>

    </div>
  );
};

export default ModificacionesForm;
