import React from 'react'
import axios from 'axios'
const postP = async () => {
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
    alert("Instrumento ingresado con éxito");
    setInstrumento("")
    setMarca("")
    setModelo("")
    setEspecificaciones("")
    setPrecio("")
    setImagen("")
  } catch (error) {
    console.error("Error al cargar datos o registrar instrumento:", error);
    alert("Error al intentar registrar.");
  }
}

export default postP
