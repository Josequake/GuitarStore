import React from 'react'

const modifyU = async (id) => {
    try {
        await axios.put(`http://localhost:3001/user/${id}`);
        
      } catch (error) {
        alert("Error al intentar eliminar al usuario");
      }
    };
  


export default modifyU
