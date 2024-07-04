import React, { useState } from "react";
import { Link } from "react-router-dom";
import eliminarU from "../services/users/eliminarU";

const eliminarUForm = () => {
  const [id, setId] = useState("");
  const [deletedUser, setDeletedUser] = useState(null);

  const eliminarUsuario = () => {
    
    try {
      eliminarU(id);
      setDeletedUser(id);
      alert("Usuario eliminado con éxito");
      setId("");
    } catch (error) {
      //console.error("Error al eliminar el producto:", error);
      setDeletedUser(null);
    }
  };
 
  return (
    <div>
      <h1>Eliminar Usuario</h1>
      <p>Ingrese el ID del usuario que desea eliminar:</p>
      <input
        type="text"
        name="id"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={eliminarUsuario}>Eliminar</button>
      

      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default eliminarUForm;
