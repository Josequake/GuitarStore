import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const EliminarForm = () => {
  const [id, setId] = useState("");

  const eliminarProducto = async () => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      alert("Instrumento eliminado con éxito");
      setId(""); 
    } catch (error) {
      alert("Error al intentar eliminar el instrumento");
      
    }
  };

  return (
    <div>
      <h1>Ingrese el ID del instrumento</h1>
      <input
        type="text"
        name="id"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <p>Ingrese el ID del producto que desea eliminar.</p>
      <button onClick={eliminarProducto}>Borrar</button>
      <Link to="/">Página principal</Link>
    </div>
  );
};

export default EliminarForm;
