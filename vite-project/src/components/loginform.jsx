import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function loginform() {
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = {
          email:correo,
          password:contra
        }
        const response = await axios.get('http://localhost:3001/user',userData);
        
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  const IngresoUser = () => {
    let usuarioEncontrado = false;

    
    if (data) {
      
      for (let i = 0; i < db.json.length; i++) {
        if (contra === data[i].contra) { 
          usuarioEncontrado = true;
          break;
        }
      }
    }

    if (usuarioEncontrado) {
      alert('¡Ingresado con éxito!');
    } else {
      alert('El usuario no está registrado');
    }
  };

  return (
    <div>
      <h1>Ingrese Correo</h1>
      <input type="text" id='correo' name='correo' value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <h1>Ingrese contraseña</h1>
      <input type="password" id='contra' name='contra' value={contra} onChange={(e) => setContra(e.target.value)} />
      <button onClick={IngresoUser}>Ingresar</button>
      <label htmlFor="">no tienes cuenta aun?</label>
      <button><Link to="/register">Registrate!</Link></button>
    </div>
  );
}

export default loginform;
