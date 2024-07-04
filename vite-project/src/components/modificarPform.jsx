import React, { useState } from 'react';
import axios from 'axios'; // Asumiendo que axios está instalado y configurado correctamente

const ModificarPform = () => {
  const [id, setId] = useState('');
  const [instrumento, setInstrumento] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [especificaciones, setEspecificaciones] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  const getP = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/products${id}`); // Reemplaza 'URL_DE_TU_API' por la URL correcta de tu API
      // Suponiendo que la respuesta de tu API contiene los datos del producto encontrado
      setInstrumento(response.data.instrumento);
      setMarca(response.data.marca);
      setModelo(response.data.modelo);
      setEspecificaciones(response.data.especificaciones);
      setPrecio(response.data.precio);
      setImagen(response.data.imagen);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  };

  const actualizarProducto = async () => {
    try {
      await axios.post('http://localhost:3001/products', {
        id,
        instrumento,
        marca,
        modelo,
        especificaciones,
        precio,
        imagen
      });
      console.log('Producto actualizado correctamente.');
      // Limpiar los campos después de la actualización
      limpiarCampos();
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const limpiarCampos = () => {
    setId('');
    setInstrumento('');
    setMarca('');
    setModelo('');
    setEspecificaciones('');
    setPrecio('');
    setImagen('');
  };

  return (
    <div>
      <h1>Modificar o Ingresar Producto</h1>

      <p>Ingrese el ID del producto que desea modificar:</p>
      <input
        type="text"
        name="id"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={getP}>Modificar</button>

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

      <button onClick={actualizarProducto}>Acttualizar</button>

      {/* Asumiendo que utilizas React Router para manejar las rutas */}
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default ModificarPform;
