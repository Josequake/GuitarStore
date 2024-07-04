import React from "react";
import { Link } from "react-router-dom";


const ModificacionesForm = () => {


  return (
    <div>
      <h2>Que desea hacer administrador!</h2>
      <p>
      <button><Link to='/agregarP'>Agregar Producto</Link></button>
      </p>
      <p>
      <button><Link to='/eliminarP'>Eliminar Producto</Link></button>
      </p>
      <p>
      <button><Link to='/modificarP'>Modificar Producto</Link></button>
      </p>
      <p>
      <button><Link to='/agregarU'>Agregar Administrador</Link></button>
      </p>
      <p>
      <button><Link to='/eliminarU'>Eliminar Administrador</Link></button>
      </p>
      <p>
      <button><Link to='/modificarU'>Modificar Administrador</Link></button>
      </p>
      <p>
      <button><Link to='/'>Pagina Principal</Link></button>
      </p>
    </div>
  );
};

export default ModificacionesForm;
