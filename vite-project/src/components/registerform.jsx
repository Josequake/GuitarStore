import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostUregister from '../services/users/postUregister';

const registerform = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  

  const agregarUsuario = async () => {
    try {
      await PostUregister(nombre, correo, contra);
      alert('Usuario agregado correctamente');
     
      setNombre('');
      setCorreo('');
      setContra('');
      
    } catch (error) {
      alert('Error al agregar usuario: ' + error.message);
    }
  };

  useEffect(() => {
    
    cargarUsuarios();
  }, []);

  const cargarUsuarios = () => {
    
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <p>Ingrese el nombre del usuario</p>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Ingrese el correo del usuario</p>
      <input
        type="text"
        id="correo"
        name="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <p>Ingrese la contraseña del usuario</p>
      <input
        type="password"
        id="contra"
        name="contra"
        value={contra}
        onChange={(e) => setContra(e.target.value)}
      />
      <button onClick={agregarUsuario}>Registrarse</button>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
      <p>
        <Link to="/">Ir a página principal</Link>
      </p>
    </div>
  );
};

export default registerform;
