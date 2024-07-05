import React from 'react'
import axios from 'axios'
const modifyP = async (id) => {
    try {
        await axios.put(`http://localhost:3001/products/${id}`);
        
      } catch (error) {
        alert("Error al intentar eliminar el producto");
      }
    };
  


export default modifyP
