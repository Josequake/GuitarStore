import React from 'react'
import axios from 'axios'


const postUregister = async (nombre,correo,contra) => {
    const userData = {
        name: nombre,
        email: correo,
        password: contra,
        range: "", 
      };
    
    try {
      await axios.post("http://localhost:3001/user", userData);
      
      
    } catch (error) {
        
      
    }
  }

export default postUregister
