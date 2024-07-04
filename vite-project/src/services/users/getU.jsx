import React from 'react'
import axios from 'axios'

const getU = async () => {
    try {
        const url = "http://localhost:3001/user";
        const response = await axios.get(url);
        const usuarios = response.data;
  
        
        return usuarios
        
    } catch (error) {
        console.log(error)
    }
}

export default getU
