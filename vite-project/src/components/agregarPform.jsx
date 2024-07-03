import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostP from '../services/products/postP'

const agregarPform = () => {
  const [products,setProducts] = useState([])
  const [instrumento, setInstrumento] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [especificaciones, setEspecificaciones] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const agregarProducto = async () => {
    const response = await PostP()
    setProducts(response)
   
     
  };
  useEffect(() => {
    agregarProducto()
  },[]);
  
  
  return (
    <div>
      <h1>Ingrese el tipo de instrumento</h1>
      <input
        type="text"
        name="instrumento"
        id="instrumento"
        value={instrumento}
        onChange={(e) => setInstrumento(e.target.value)}
      />
      <h1>Ingrese la marca del instrumento</h1>
      <input
        type="text"
        name="marca"
        id="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />
      <h1>Ingrese el modelo del instrumento</h1>
      <input
        type="text"
        name="modelo"
        id="modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />
      <h1>Ingrese las especificaciones del instrumento</h1>
      <input
        type="text"
        name="especificaciones"
        id="especificaciones"
        value={especificaciones}
        onChange={(e) => setEspecificaciones(e.target.value)}
      />
      <h1>Ingrese el precio del instrumento</h1>
      <input
        type="text"
        name="precio"
        id="precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <h1>Ingrese la imagen del instrumento</h1>
      <input
        type="text"
        name="imagen"
        id="imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />

      <p>
        si desea ingresar un instrumento rellene todos los espacios
      </p>
      <button onClick={agregarProducto}>Ingresar</button>
      <Link to="/">Página principal</Link>
    </div>
  );
};

export default agregarPform;
