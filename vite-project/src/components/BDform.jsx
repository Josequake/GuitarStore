// Componente para gestionar la base de datos de productos y usuarios.


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

// Funcion principal
const BDform = () => {
  // Estados para controlar la apertura de modales y los inputs de los formularios modales.
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [input9, setInput9] = useState('');
  const [input10, setInput10] = useState('');
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [productoEncontrado, setProductoEncontrado] = useState(null);
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);

  // Función para mostrar la lista de productos.
  const mostrarProducto = async () => {
    setLoadingProducts(true);
    try {
      // Obtiene la lista de productos.
      const responseP = await getP();
      setProducts(responseP); // Actualiza el estado con la lista de productos obtenida.
    } catch (error) {
      console.error('Error al mostrar productos:', error);
      Swal.fire("Error al mostrar productos");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Función para mostrar la lista de usuarios.
  const mostrarUsuario = async () => {
    setLoadingUsers(true);
    try {
      // Obtiene la lista de usuarios.
      const responseU = await getU();
      setUsers(responseU); // Actualiza el estado con la lista de usuarios obtenida.
    } catch (error) {
      console.error('Error al mostrar usuarios:', error);
      Swal.fire("Error al mostrar usuarios");
    } finally {
      setLoadingUsers(false);
    }
  };
 // Función para eliminar un producto por su ID.
  const eliminarProducto = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Deleted product",
        text: "Are you sure you want to delete this product?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sure, Eliminate!",
        cancelButtonText: "No, cancel!",
      });
      
      if (result.isConfirmed) {
        await eliminarP(id);// Llama a la función para eliminar el producto.
        setProducts(products.filter(product => product.id !== id));// Actualiza la lista de productos en el estado local.
        Swal.fire({
          title: "Deleted!",
          text: "The product has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      Swal.fire("Error deleting product");
    }
  };
// Función para eliminar un usuario por su ID.
  const eliminarUsuario = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Delete User",
        text: "Are you sure that you to delete this user?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sure, Eliminate!",
        cancelButtonText: "No, cancel!",
      });

      if (result.isConfirmed) {
        await eliminarU(id);// Llama a la función para eliminar el usuario.
        setUsers(users.filter(user => user.id !== id)); // Actualiza la lista de usuarios en el estado local.
        Swal.fire({
          title: "Deleted!",
          text: "The user have been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      Swal.fire("Error deleting user");
    }
  };
   // Función para actualizar un producto.
  const actualizarProducto = async () => {
    const valorId = localStorage.getItem('idProduct')
    try {
      const productData = {
        instrument: input5,
        brand: input6,
        model: input7,
        specifics: input8,
        price: input9, 
        imagenUrl: input10,
      };
      await putP(valorId, productData);
      Swal.fire("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire("Error updating product");
    }
  };
 // Función para actualizar un usuario.
  const actualizarUsuario = async () => {
    const valorId = localStorage.getItem('idUser')
    
    try {
      const userData = {
        name: input1,
        email: input2,
        password: input3,
        range: input4
      };
      await putU(valorId, userData);// Llama a la función para actualizar el usuario.
       
      Swal.fire('User successfully updated');
    } catch (error) {
      console.error("Error updating user:", error);
      alert('Error updating user');
    }
  };

  useEffect(() => {
    
  }, []);
  // Función para manejar el clic en el botón de actualizar producto.
  const handleButtonClick = (id) => {
    localStorage.setItem('idProduct',id)
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
        setModalIsOpen1(true); // Abre el modal para actualizar producto.
      }
    });
  };
  // Función para manejar el clic en el botón de actualizar usuario.
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
        setModalIsOpen2(true); // Abre el modal para actualizar usuario.
      }
    });
  };
  // Función para manejar el envío del formulario modal.
  const handleSubmit = (event) => {
    event.preventDefault();
  setModalIsOpen1(false); // Cierra el modal de actualizar producto.
  setModalIsOpen2(false); // Cierra el modal de actualizar usuario
  };

  return (
    
    <div className="container"
    style={{ border: "1px solid black", borderRadius: "7px" }}>
      <h1 className='titulo'>Data base</h1>
      {/* Botones para mostrar productos y usuarios poder devolverse a la pagina principal (Home) */}
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
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.range}</td>
                  <td><button className="btn btn-info" onClick={() => handleButtonClick2(user.id)}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => eliminarUsuario(user.id)}>Eliminate</button></td>               
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </div>
        
      ) : null}
      <Modal isOpen={modalIsOpen1} onRequestClose={() => setModalIsOpen1(false)} contentLabel="Example Modal">
        <h2>Product's data</h2>
        <form onSubmit={handleSubmit}>
          <div>
            
            <input
              type="text"
              value={input5}
              onChange={(e) => setInput5(e.target.value)}
              placeholder='type of instrument'
              className="form-control"
            />
          </div>
          <div>
          
            <input
              type="text"
              value={input6}
              onChange={(e) => setInput6(e.target.value)}
              placeholder='brand'
              className="form-control"
            />
          </div>
          <div>
          
            <input
              type="text"
              value={input7}
              onChange={(e) => setInput7(e.target.value)}
              placeholder='model'
              className="form-control"
            />
          </div>
          <div>
          
            <input
              type="text"
              value={input8}
              onChange={(e) => setInput8(e.target.value)}
              placeholder='specifics'
              className="form-control"
            />
          </div>
          <div>
            
            <input
              type="text"
              value={input9}
              onChange={(e) => setInput9(e.target.value)}
              placeholder='price'
              className="form-control"
            />
          </div>
          <div>
            
            <input
              type="text"
              value={input10}
              onChange={(e) => setInput10(e.target.value)}
              placeholder='image url'
              className="form-control"
            />
          </div>
          
          <button className='btn btn-success' type="button" onClick={() => actualizarProducto()}>Update</button>
          <button className='btn btn-danger' type="button" onClick={() => setModalIsOpen1(false)}>Go out</button>
        </form>
      </Modal>
      
       <Modal isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)} contentLabel="Example Modal">
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
          <button className='btn btn-danger' type="button" onClick={() => setModalIsOpen2(false)}>Go out</button>
        </form>
      </Modal>

      
    </div>
  );
}

export default BDform;