import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const registergetpost = async () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const navigate = useNavigate();
    try {
        const url = "http://localhost:3001/user";
        const response = await axios.get(url);
        const usuarios = response.data;
  
        const correoExistente = usuarios.find(
          (usuario) => usuario.email === correo
        );
  
        if (correoExistente) {
          alert("Ese correo ya está registrado");
        } else {
          const userData = {
            nombre: nombre,
            email: correo,
            password: contra,
            range:""
          };
  
          await axios.post("http://localhost:3001/user", userData);
          alert("Registro exitoso");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
}

export default registergetpost
