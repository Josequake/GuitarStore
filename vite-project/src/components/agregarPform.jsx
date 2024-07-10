import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostP from '../services/products/postP';
import Swal from 'sweetalert2'
import '../styles/modificaciones.css'


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
      Swal.fire("Product entered successfully!");
      setInstrumento("")
      setMarca("")
      setModelo("")
      setEspecificaciones("")
      setPrecio("")
      setImagen("")
    } catch (error) {
      alert('Error to add thje instrument: ' + error.message);
      
    }
      
  };
  useEffect(() => {
    cargarProductos()
  },[]);
  const cargarProductos = () => {
    
  };
  
  return (
    <div className='container' style={{border:'1px solid black',borderRadius:'7px'}}>
      <h1 className="titulo">
        If you want to add an instrument <br />
        please fill the whole spaces
      </h1>
      
      <input
        type="text"
        name="instrumento"
        id="instrumento"
        value={instrumento}
        onChange={(e) => setInstrumento(e.target.value)} 
        placeholder='type of instrument'
        className="form-control"
      />
      
      <input
        type="text"
        name="marca"
        id="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)} 
        placeholder='brand'
        className="form-control"
      />
      
      <input
        type="text"
        name="modelo"
        id="modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)} 
        placeholder='model'
        className="form-control"
      />
      
      <input
        type="text"
        name="especificaciones"
        id="especificaciones"
        value={especificaciones}
        onChange={(e) => setEspecificaciones(e.target.value)}
        placeholder='specifics'
        className="form-control"
      />
      
      <input
        type="text"
        name="precio"
        id="precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)} 
        placeholder='price'
        className="form-control"
      />
      
      <input
        type="text"
        name="imagen"
        id="imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        placeholder='image URL'
        className="form-control"
      />
      <div>
      <button className="btn btn-success" onClick={agregarProducto}>Add Instrument</button>
      </div>
      <div>
      <button className='btn btn-dark' style={{marginTop:'5px'}}><Link to="/" className='link'>Home</Link></button>
      </div>
    </div>
  );
};

export default agregarPform;
