import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../styles/contactenos.css";
import Imagen from "../assets/img/imagen.avif";

const quienSomosform = () => {
  const [contac, setContac] = useState("");
  const [misio, setMision] = useState("");
  const [visio, setVision] = useState("");

  const contact = () => {
    setContac("");
  };
  const mision = () => {
    setMision("");
  };
  const vision = () => {
    setVision("");
  };

  return (
    <div>
      
      <button onClick={contact}>Contactenos</button>
      <button onClick={mision}>Mision</button>
      <button onClick={vision}>Vision</button>
      <button><Link to="/">Pagina principal</Link></button>

      <div class="contenedor">
        <img src={Imagen} />
        <div>
          <p class="centrado">{contac}</p>
        </div>
        <div>
          <p class="centrado">{misio}</p>
        </div>
        <div>
          <p class="centrado">{visio}</p>
        </div>
      </div>
    </div>
  );
};

export default quienSomosform;
