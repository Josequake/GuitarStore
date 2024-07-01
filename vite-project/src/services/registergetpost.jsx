import React from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const registergetpost = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");
    const navigate = useNavigate();

  const cargarDatos = async () => {
    try {
      // Fetch existing users
      const url = "http://localhost:3001/user";
      const response = await axios.get(url);
      const usuarios = response.data;

      // Check if email already exists
      const correoExistente = usuarios.find((usuario) => usuario.email === correo);

      if (correoExistente) {
        alert("Ese correo ya está registrado");
      } else {
        // Prepare user data for registration
        const userData = {
          nombre: nombre,
          email: correo,
          password: contra,
          range: "", // Adjust as per your requirements
        };

        // Register the user
        await axios.post("http://localhost:3001/user", userData);
        alert("Registro exitoso");
        
        // Redirect to login page after successful registration
        navigate("/login");
      }
    } catch (error) {
      console.error("Error al cargar datos o registrar usuario:", error);
      alert("Error al intentar registrar. Por favor, inténtalo de nuevo más tarde.");
    }
  };
  
}

export default registergetpost
