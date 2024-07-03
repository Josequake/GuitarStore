import { Link } from "react-router-dom";
import React, { useState } from "react";
import deleteP from "../services/products/deleteP";

const EliminarPForm = () => {
  const [id, setId] = useState(""); // Estado para almacenar el ID del producto a eliminar
  const [deletedProduct, setDeletedProduct] = useState(null); // Estado para almacenar el producto eliminado

  const eliminarProducto = async () => {
    try {
      const response = await deleteP(id); // Llamar a la función deleteP con el ID
      setDeletedProduct(response); // Guardar el producto eliminado en el estado
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
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
      
      {deletedProduct && (
        <p>Producto con ID {deletedProduct.id} eliminado correctamente.</p>
      )}

      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default EliminarPForm;
