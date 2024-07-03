import React from 'react'
import axios from 'axios'

const products = async () => {
    try {
        const url = "http://localhost:3001/products";
        const response = await axios.get(url);
        const productos = response.data;
  
        console.log(productos)
        return productos
        
    } catch (error) {
        console.log(error)
    }
        
  
        
 
}

export default products
