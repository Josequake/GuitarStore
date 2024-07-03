import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const getANDpostU = async () => {
    const navigate = useNavigate();
    try {
        const url = "http://localhost:3001/user";
        const response = await axios.get(url);
        const usuarios = response.data;
  
        const correoExistente = usuarios.find((usuario) => usuario.email === correo);
  
        if (correoExistente) {
          alert("Ese correo ya está registrado");
        } else {
          const userData = {
            name: nombre,
            email: correo,
            password: contra,
            range: "", 
          };
  
          await axios.post("http://localhost:3001/user", userData);
          alert("Registro exitoso");
          navigate("/"); 
        }
      } catch (error) {
        console.error("Error al cargar datos o registrar usuario:", error);
        alert("Error al intentar registrar.");
      }
    };
  


export default getANDpostU


