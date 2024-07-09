import React from 'react'
import axios from 'axios'


const postU = async (nombre,correo,contra,rango) => {
    const userData = {
        name: nombre,
        email: correo,
        password: contra,
        range: rango, 
      };
    
    try {
      await axios.post("http://localhost:3001/user", userData);
      
      
    } catch (error) {
        
      
    }
  }

export default postU
