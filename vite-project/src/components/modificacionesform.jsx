import React from "react";
import { Link } from "react-router-dom";


const ModificacionesForm = () => {


  return (
    <div>
      <h2>Que desea hacer administrador!</h2>
      <button><Link to='/agregar'>Agregar</Link></button>
      <button><Link to='/eliminar'>Eliminar</Link></button>
      <button><Link>Modificar</Link></button>
      <button><Link to='/'>Pagina Principal</Link></button>

    </div>
  );
};

export default ModificacionesForm;
