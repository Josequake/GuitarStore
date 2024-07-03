import React from "react";
import axios from "axios";

const deleteP = () => {
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
};

export default deleteP;
