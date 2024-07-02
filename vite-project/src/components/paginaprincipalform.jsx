import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const paginaprincipalform = () => {
  const gibson = async () => {
    
    const productData = {
      instrument: instrumento,
      brand: marca,
      model: modelo,
      specifics: especificaciones,
      price: precio,
      imagenUrl: imagen
    };
    const url = "http://localhost:3001/products";
    const response = await axios.get(url);
    const productos = response.data;
    const productoExistente = productos.find((producto) => producto === productData);
    alert(productoExistente)
    
  
  } 

  const fender = async () => {
    const productData = {
      instrument: instrument,
      brand: marca,
      model: modelo,
      specifics: especificaciones,
      price: precio,
      imagenUrl: imagen
    };
    const url = "http://localhost:3001/products";
    const response = await axios.get(url);
    const productos = response.data;
    //const productoExistente = productos.find((producto) => producto.brand === productData);
    alert(productos)

  }
  const jackson = async () => {
    const productData = {
      instrument: instrumento,
      brand: marca,
      model: modelo,
      specifics: especificaciones,
      price: precio,
      imagenUrl: imagen
    };

  }
  const epiphone = async () => {
    const productData = {
      instrument: instrumento,
      marca: marca,
      modelo: modelo,
      especificaciones: especificaciones,
      precio: precio,
      imagenUrl: imagen
    };

  }
  return (
    <div>
      <h1>bienvenido a guitar store</h1>
      <button onClick={gibson}>Gibson</button>
      <div>
            
      </div>
      <button onClick={fender}>Fender</button>
      <button onClick={jackson}>Jackson</button>
      <button onClick={epiphone}>Epiphone</button>
    </div>
  )
}

export default paginaprincipalform




