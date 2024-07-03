import React, { useState } from "react";
import { Link } from "react-router-dom";
import getANDpost from "../services/users/getANDpostU";

const RegisterForm = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const cargarDatos = async () => {
    try {
      const response = await getANDpost();
      setUsuarios(response);
      
    } catch (error) {
      console.error("Error al cargar datos:", error);
     
    }
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
      <button onClick={cargarDatos}>Registrarse</button>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
      <p>
        <Link to="/">Ir a página principal</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
