import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loginget from '../services/loginget'


function loginform() {
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const IngresoUser = () => {
    Loginget()
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
