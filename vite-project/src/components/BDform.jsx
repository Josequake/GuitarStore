import React, { useState, useEffect } from 'react';
import getP from '../services/products/getP';
import getU from '../services/users/getU';
import eliminarP from '../services/products/eliminarP';
import eliminarU from '../services/users/eliminarU';
import putP from '../services/products/putP';
import putU from '../services/users/putU';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


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
    const valorId = localStorage.getItem('idUser')
    console.log(valorId,input1,input2,input3,input4)
    try {
      const userData = {
        name: input1,
        email: input2,
        password: input3,
        range: input4
      };
      await putU(valorId, userData);
       
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
      title: 'Update?',
      text: 'Are you sure you want to update this product?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setModalIsOpen(true);
      }
    });
  };
  const handleButtonClick2 = (id) => {
    localStorage.setItem('idUser',id)
    Swal.fire({
      title: 'Update?',
      text: 'Are you sure you want to update this user?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel'
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
    
    <div className='container'  >
      <h1 className='titulo'>Data base</h1>
      <div className='row col-md-12'>
        <div className='col-md-4' style={{textAlign: "center"}}>
        <button className="boton"  onClick={mostrarProducto} disabled={loadingProducts}>
        {loadingProducts ? 'Cargando Productos...' : 'Show Products'}
      </button>
        </div>
        <div className='col-md-4' style={{textAlign: "center"}}><button className='boton'><Link to="/" className='link' >Home</Link></button></div>
        <div className='col-md-4' style={{textAlign: "center"}}><button className="boton" onClick={mostrarUsuario} disabled={loadingUsers}>
        {loadingUsers ? 'Cargando Usuarios...' : 'Show Users'}
      </button></div>
      </div>
     
      
      
      

      {/* Sección de productos */}
      {productoEncontrado || products.length > 0 ? (
        
          <div className='row'>
        <div className='col-md-12'>
        
          <h2 className='h3'>Products:</h2>
          <Table striped bordered hover>
            <thead border="5">
              <tr border="5">
                <th >ID</th>
                <th >Type of Instrument</th>
                <th >Brand</th>
                <th >Model</th>
                <th >Specifics</th>
                <th >Price</th>
               
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.instrument}</td>
                  <td>{product.brand}</td>
                  <td>{product.model}</td>
                  <td>{product.specifics}</td>
                  <td>{product.price}</td>
                  <td><button className="btn btn-info" onClick={() => handleButtonClick(product.id)}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => eliminarProducto(product.id)}>Eliminate</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </div>
        
      ) : null}

      {/* Sección de usuarios */}
      {usuarioEncontrado || users.length > 0 ? (

        <div className='row'>
        <div className='col-md-12'>
          <h2 className='h3'>Users:</h2>
          <Table striped bordered hover>
            <thead border="5">
              <tr  border="5">
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className='table'>{user.name}</td>
                  <td className='table'>{user.email}</td>
                  <td className='table'>{user.password}</td>
                  <td className='table'>{user.range}</td>
                  <td><button className="btn btn-info" onClick={() => handleButtonClick2(user.id)}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => eliminarUsuario(user.id)}>Eliminate</button></td>               
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </div>
        
      ) : null}
      
       <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Example Modal">
        <h2>User's data</h2>
        <form onSubmit={handleSubmit}>
          <div>
            
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder='name'
              className="form-control"
            />
          </div>
          <div>
          
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder='email'
              className="form-control"
            />
          </div>
          <div>
          
            <input
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              placeholder='password'
              className="form-control"
            />
          </div>
          <div>
          
            <input
              type="text"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              placeholder='range'
              className="form-control"
            />
          </div>
          <button className='btn btn-success' type="button" onClick={() => actualizarUsuario()}>Update</button>
          <button className='btn btn-danger' type="button" onClick={() => setModalIsOpen(false)}>Go out</button>
        </form>
      </Modal>

      
    </div>
  );
}

export default BDform;
