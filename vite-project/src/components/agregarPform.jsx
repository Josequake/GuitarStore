import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostP from '../services/products/postP'

const agregarPform = () => {
  
  const [instrumento, setInstrumento] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [especificaciones, setEspecificaciones] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  

  const agregarProducto = async () => {
    try {
      await PostP(instrumento,marca,modelo,especificaciones,precio,imagen)
      setInstrumento("")
      setMarca("")
      setModelo("")
      setEspecificaciones("")
      setPrecio("")
      setImagen("")
    } catch (error) {
      alert('Error al agregar instrumento: ' + error.message);
      
    }
      
  };
  useEffect(() => {
    cargarProductos()
  },[]);
  const cargarProductos = () => {
    
  };
  
  return (
    <div>
      <h1>
        Si desea ingresar un instrumento <br />
        rellene todos los espacios
      </h1>
      <h3>Ingrese el tipo de instrumento</h3>
      <input
        type="text"
        name="instrumento"
        id="instrumento"
        value={instrumento}
        onChange={(e) => setInstrumento(e.target.value)}
      />
      <h3>Ingrese la marca del instrumento</h3>
      <input
        type="text"
        name="marca"
        id="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />
      <h3>Ingrese el modelo del instrumento</h3>
      <input
        type="text"
        name="modelo"
        id="modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />
      <h3>Ingrese las especificaciones del instrumento</h3>
      <input
        type="text"
        name="especificaciones"
        id="especificaciones"
        value={especificaciones}
        onChange={(e) => setEspecificaciones(e.target.value)}
      />
      <h3>Ingrese el precio del instrumento</h3>
      <input
        type="text"
        name="precio"
        id="precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <h3>Ingrese la imagen del instrumento</h3>
      <input
        type="text"
        name="imagen"
        id="imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />

      
      <button onClick={agregarProducto}>Ingresar</button>
      <Link to="/">Página principal</Link>
    </div>
  );
};

export default agregarPform;
