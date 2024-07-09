import React from "react";
import { Link } from "react-router-dom";
import '../styles/modificaciones.css'
import background from '../assets/img/engranaje.avif'

const ModificacionesForm = () => {


  return (
    <div className='content'style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
      <h2 className="titulo">Que desea hacer administrador!</h2>
      <p >
      <button className="boton"><Link to='/agregarP' className="link">Agregar Producto</Link></button>
      </p>
      <p>
      <button className="boton"><Link to='/agregarU' className="link">Agregar Administrador</Link></button>
      </p>
      <p>
      <button className="boton"><Link to='/BD'className="link" >Base de Datos</Link></button>
      </p>
      <p>
      <button className="boton"><Link to='/' className="link">Pagina Principal</Link></button>
      </p>
      
    </div>
  );
};

export default ModificacionesForm;
