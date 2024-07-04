import React from "react";
import axios from "axios";

const eliminarP = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      
    } catch (error) {
      alert("Error al intentar eliminar el instrumento");
    }
  };


export default eliminarP;
