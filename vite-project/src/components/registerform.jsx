import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const navigate = useNavigate();

  const cargarDatos = async () => {
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
  };

  return (
    <div>
      <h1>Ingrese nombre de usuario</h1>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <h1>Ingrese Correo</h1>
      <input
        type="text"
        id="correo"
        name="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <h1>Ingrese contraseña</h1>
      <input
        type="password"
        id="contra"
        name="contra"
        value={contra}
        onChange={(e) => setContra(e.target.value)}
      />
      <button onClick={cargarDatos}>Registrarse</button>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
