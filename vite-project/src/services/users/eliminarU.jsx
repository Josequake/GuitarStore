import React from "react";
import axios from "axios";

const eliminarU = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/user/${id}`);
      
    } catch (error) {
      alert("Error al intentar eliminar al usuario");
    }
  };


export default eliminarU;