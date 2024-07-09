import React, { useState, useEffect } from 'react';
import getP from '../services/products/getP';
import getU from '../services/users/getU';
import eliminarP from '../services/products/eliminarP';
import eliminarU from '../services/users/eliminarU';
import putP from '../services/products/putP';
import putU from '../services/users/putU';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import background from '../assets/img/engranaje.avif';

const BDform = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [productoEncontrado, setProductoEncontrado] = useState(null);
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);

  const mostrarProducto = async () => {
    setLoadingProducts(true);
    try {
      const responseP = await getP();
      setProducts(responseP); 
    } catch (error) {
      console.error('Error al mostrar productos:', error);
      Swal.fire("Error al mostrar productos");
    } finally {
      setLoadingProducts(false);
    }
  };

  const mostrarUsuario = async () => {
    setLoadingUsers(true);
    try {
      const responseU = await getU();
      setUsers(responseU); 
    } catch (error) {
      console.error('Error al mostrar usuarios:', error);
      Swal.fire("Error al mostrar usuarios");
    } finally {
      setLoadingUsers(false);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Eliminar producto",
        text: "Estás seguro que deseas borrar este producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "No, cancelar!",
      });
      
      if (result.isConfirmed) {
        await eliminarP(id);
        setProducts(products.filter(product => product.id !== id));
        Swal.fire({
          title: "Eliminado!",
          text: "El producto ha sido eliminado.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      Swal.fire("Error al eliminar producto");
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Eliminar Usuario",
        text: "Estás seguro que deseas borrar a este usuario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "No, cancelar!",
      });

      if (result.isConfirmed) {
        await eliminarU(id);
        setUsers(users.filter(user => user.id !== id));
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      Swal.fire("Error al eliminar usuario");
    }
  };

  const modificarProducto = async (id) => {
    try {
      const data = await getP();
      const producto = data.find((p) => p.id === id);
      if (producto) {
        setProductoEncontrado(producto);
      } else {
        Swal.fire("No existe producto con ese ID");
        setProductoEncontrado(null);
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
      Swal.fire("Error al obtener productos");
    }
  };
  
  const modificarUsuario = async (id) => {
    try {
      const data = await getU();
      const usuario = data.find(u => u.id === id);
      if (usuario) {
        setUsuarioEncontrado(usuario);
      } else {
        Swal.fire("No existe usuario con ese ID");
        setUsuarioEncontrado(null);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };
  const actualizarProducto = async () => {
    try {
      const productData = {
        instrumento: instrumento,
        marca: marca,
        modelo: modelo,
        especificaciones: especificaciones,
        precio: precio, 
        imagenUrl: imagen,
      };
      await putP(id, productData);
      Swal.fire("Producto actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      Swal.fire("Error al actualizar producto");
    }
  };

  const actualizarUsuario = async () => {
    try {
      const userData = {
        nombre: nombre,
        correo: correo,
        contra: contra,
        rango: rango
      };
      const response = await putU(id, userData);
       
      Swal.fire('Usuario actualizado con éxito');
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      alert('Error al actualizar usuario');
    }
  };

  useEffect(() => {
    // No se hace ninguna llamada inicial aquí para evitar la carga automática
    // mostrarProducto();
    // mostrarUsuario();
  }, []);
  const handleButtonClick = (id) => {
    console.log(id)
    Swal.fire({
      title: 'Modificar usuario?',
      text: 'Esta seguro que desea actualizar este usuario',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setModalIsOpen(true);
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  setModalIsOpen(false);
  };

  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
      <h1 className='titulo'>Base de datos</h1>
      <button className="boton" onClick={mostrarProducto} disabled={loadingProducts}>
        {loadingProducts ? 'Cargando Productos...' : 'Mostrar Productos'}
      </button>
      <button className="boton" onClick={mostrarUsuario} disabled={loadingUsers}>
        {loadingUsers ? 'Cargando Usuarios...' : 'Mostrar Usuarios'}
      </button>
      <button className='boton'><Link to="/" className='link' >Página Principal</Link></button>

      {/* Sección de productos */}
      {productoEncontrado || products.length > 0 ? (
        <div>
          <h2 className='h3'>Productos:</h2>
          <table border="5">
            <thead border="5">
              <tr border="5">
                <th className='table'>ID</th>
                <th className='table'>Tipo Instrumento</th>
                <th className='table'>Marca</th>
                <th className='table'>Modelo</th>
                <th className='table'>Especificaciones</th>
                <th className='table'>Precio</th>
               
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className='table'>{product.id}</td>
                  <td className='table'>{product.instrument}</td>
                  <td className='table'>{product.brand}</td>
                  <td className='table'>{product.model}</td>
                  <td className='table'>{product.specifics}</td>
                  <td className='table'>{product.price}</td>
                  <td><button className="boton" onClick={() => modificarProducto(product.id)}>Modificar</button></td>
                  <td><button className="boton" onClick={() => eliminarProducto(product.id)}>Eliminar</button></td>
                  <td><button className="boton" onClick={() => actualizarProducto(product.id)}>Actualizar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {/* Sección de usuarios */}
      {usuarioEncontrado || users.length > 0 ? (
        <div>
          <h2 className='h3'>Usuarios:</h2>
          <table border="5">
            <thead border="5">
              <tr  border="5">
                <th className='table'>Nombre</th>
                <th className='table'>Correo</th>
                <th className='table'>Contraseña</th>
                <th className='table'>Rango</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className='table'>{user.name}</td>
                  <td className='table'>{user.email}</td>
                  <td className='table'>{user.password}</td>
                  <td className='table'>{user.range}</td>
                  <td><button className="boton" onClick={() => handleButtonClick(user.id)}>Editar</button></td>
                  <td><button className="boton" onClick={() => eliminarUsuario(user.id)}>Eliminar</button></td>
                  <td><button className="boton" onClick={() => actualizarUsuario(user.id)}>Actualizar</button></td>                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      
       <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Example Modal">
        <h2>Formulario en el Modal</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder='nombre'
            />
          </div>
          <div>
          <label>Correo:</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder='correo'
            />
          </div>
          <div>
          <label>Contrasena:</label>
            <input
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              placeholder='contrasena'
            />
          </div>
          <div>
          <label>Rango:</label>
            <input
              type="text"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              placeholder='rango'
            />
          </div>
          <button className='boton' type="submit">Actualizar</button>
          <button className='boton' type="button" onClick={() => setModalIsOpen(false)}>Salir</button>
        </form>
      </Modal>

      
    </div>
  );
}

export default BDform;
