import React from 'react'
import axios from 'axios'


const postP = async (instrumento,marca,modelo,especificaciones,precio,imagen) => {
  const productData = {
    instrument: instrumento,
    brand: marca,
    model: modelo,
    specifics: especificaciones,
    price: precio,
    imagenUrl: imagen,
  };
  
  try {
    await axios.post("http://localhost:3001/products", productData);
    
    
  } catch (error) {
    
    
  }
}

export default postP
