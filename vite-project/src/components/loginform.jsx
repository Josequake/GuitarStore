import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function loginform() {
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const IngresoUser = async () => {
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
  };

  return (
    <div>
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
      <button onClick={IngresoUser}>Ingresar</button>
      <label htmlFor="">no tienes cuenta aun?</label>
      <p>
        <Link to="/register">Registrate!</Link>
      </p>
    </div>
  );
}

export default loginform;
