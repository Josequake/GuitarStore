import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const registerform = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();



  const cargardatos = () => {
    axios.get('/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // siempre sera ejecutado
    });
    const userData = {
      nombre: nombre,
      email: correo,
      password: contra,
    };

    for (let i = 0; i < data.length; i++) {
      console.log("aqui vamos", data[i]);
      if (correo == data[i]) {
        alert("usuario ya se encuentra registrado");
      } else if (nombre != "" && correo != "" && contra != "") {
        userData;

        axios.post("http://localhost:3001/user", userData);
        alert("se ingreso con exito");
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <h1>Ingrese nombre de usuario</h1>
      <input
        type="text"
        id="nombre"
        name="nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <h1>Ingrese Correo</h1>
      <input
        type="text"
        id="correo"
        name="correo"
        onChange={(e) => setCorreo(e.target.value)}
      />
      <h1>Ingrese contrasena</h1>
      <input
        type="password"
        id="contra"
        name="contra"
        onChange={(e) => setContra(e.target.value)}
      />
      <button onClick={cargardatos}>Registrarse</button>
      <label htmlFor="">Si ya posees cuenta pulsa</label>
      <button>
        <Link to="/login">login</Link>
      </button>
    </div>
  );
};

export default registerform;
