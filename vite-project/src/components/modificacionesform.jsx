import React from "react";
import { Link } from "react-router-dom";
import "../styles/modificaciones.css";

//Funcion principal
const ModificacionesForm = () => {
  return (
    <div
      className="container"
      style={{ border: "1px solid black", borderRadius: "7px" }}
    >
      <h2 className="titulo">What would you like to do!</h2>
      <div className="col-md-12 row"></div>

      <div style={{marginLeft:'50px'}}>
        <button className="boton">
          <Link to="/agregarP" className="link">
            Add Product
          </Link>
        </button>
        <button className="boton">
          <Link to="/agregarU" className="link">
            Add an Admin
          </Link>
        </button>
        <button className="boton">
          <Link to="/BD" className="link">
            Data base
          </Link>
        </button>
        <div style={{marginLeft:'420px'}}>
        <button className="boton">
          <Link to="/" className="link">
            Home
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ModificacionesForm;
