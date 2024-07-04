import React, { useState } from "react";
import { Link } from "react-router-dom";
import eliminarP from "../services/products/eliminarP";
import ModifyP from '../services/products/modifyP'

const eliminarPForm = () => {
  const [id, setId] = useState("");
  const [deletedProduct, setDeletedProduct] = useState(null);

  const eliminarProducto = () => {
    
    try {
      eliminarP(id);
      setDeletedProduct(id);
      alert("Producto eliminado con éxito");
      setId("");
    } catch (error) {
      //console.error("Error al eliminar el producto:", error);
      setDeletedProduct(null);
    }
  };
 
  return (
    <div>
      <h1>Eliminar Producto</h1>
      <p>Ingrese el ID del producto que desea eliminar:</p>
      <input
        type="text"
        name="id"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={eliminarProducto}>Eliminar</button>
      

      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default eliminarPForm;
