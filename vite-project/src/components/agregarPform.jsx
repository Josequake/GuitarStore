import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostP from '../services/products/postP';
import Swal from 'sweetalert2'
import '../styles/modificaciones.css'
import background from '../assets/img/engranaje.avif'

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
      Swal.fire("Producto ingresado con exito!");
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
    <div style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
      <h1 className="titulo">
        Si desea ingresar un instrumento <br />
        rellene todos los espacios
      </h1>
      <h3 className='h3'>Ingrese el tipo de instrumento</h3>
      <input
        type="text"
        name="instrumento"
        id="instrumento"
        value={instrumento}
        onChange={(e) => setInstrumento(e.target.value)} placeholder='tipo de instrumento'
      />
      <h3 className='h3'>Ingrese la marca del instrumento</h3>
      <input
        type="text"
        name="marca"
        id="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)} placeholder='marca'
      />
      <h3 className='h3'>Ingrese el modelo del instrumento</h3>
      <input
        type="text"
        name="modelo"
        id="modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)} placeholder='modelo'
      />
      <h3 className='h3'>Ingrese las especificaciones del instrumento</h3>
      <input
        type="text"
        name="especificaciones"
        id="especificaciones"
        value={especificaciones}
        onChange={(e) => setEspecificaciones(e.target.value)} placeholder='especificaciones'
      />
      <h3 className='h3'>Ingrese el precio del instrumento</h3>
      <input
        type="text"
        name="precio"
        id="precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)} placeholder='precio'
      />
      <h3 className='h3'>Ingrese la URL imagen del instrumento</h3>
      <input
        type="text"
        name="imagen"
        id="imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}placeholder='URL de la imagen'
      />
      <p>
      <button className="boton" onClick={agregarProducto}>Ingresar</button>
      </p>
      <button className='boton'><Link to="/" className='link'>Página Principal</Link></button>
    </div>
  );
};

export default agregarPform;
