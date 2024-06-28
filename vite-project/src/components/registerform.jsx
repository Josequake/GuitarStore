import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registergetpost from '../services/registergetpost'
const RegisterForm = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  

  const cargarDatos = async () => {
    Registergetpost()
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
