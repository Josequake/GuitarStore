import React from 'react'
import {useNavigate} from 'react-router-dom'  
import axios from "axios";                                                                                                                  

const loginget = async () => {
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
    const navigate = useNavigate();
    try {
      const url = "http://localhost:3001/user";
      const response = await axios.get(url);
      const usuarios = response.data;

      const contraExistente = usuarios.find(
        (usuario) => usuario.email === correo
      );
      console.log(contraExistente);
      if (contraExistente.password != contra) {
        alert("correo o contraseña incorrecto");
      } else {
        alert("ingreso con exito!");
        navigate("/paginaprincipal");
      }
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  
}

export default loginget