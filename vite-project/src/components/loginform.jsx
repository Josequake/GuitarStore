// Componente de formulario de inicio de sesión 
// que maneja la autenticación de usuarios y redireccionamiento.

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

//Funcion principal
function LoginForm() {
  // Estados para manejar el correo, contraseña, carga, error y navegación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

   // Función para manejar el inicio de sesión.
  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const url = "http://localhost:3001/user";// URL de la API para obtener usuarios.
      const response = await axios.get(url); // Llamada GET a la API
      const usuarios = response.data; // Obtiene los usuarios de la respuesta.

      // Busca el usuario con el correo ingresado.
      const usuarioExistente = usuarios.find(
        (usuario) => usuario.email === email
      );
      // Verifica si el usuario no existe o la contraseña es incorrecta.
      if (!usuarioExistente || usuarioExistente.password !== password) {
        Swal.fire("Email or password incorrect"); // Muestra una alerta de SweetAlert.
      } else if (
        usuarioExistente.email === email &&
        usuarioExistente.password === password &&
        usuarioExistente.range !== ""
      ) {
        setTimeout(() => {
          Swal.fire("Welcome Administrator!"); // Muestra una alerta de SweetAlert.
          const userlog = localStorage.setItem(usuarioExistente.email)
        }, 10);
        navigate("/modificaciones"); // Redirige a la página de modificaciones.
      } else {
        Swal.fire("Successful login");
        navigate("/"); // Redirige a la página principal (Home).
      }
    } catch (error) {
      console.error("Error loading data:", error);
      setError(
        "Error trying to log in. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container ">
      <div className="row">
      <div className="col-md-4"></div>
    <div className="col-md-4" style={{border:'1px solid black', padding:'12px',borderRadius:'7px'}}>
      <h1 className="titulo">Log in</h1>
      <input
        type="text"
        id="correo"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email" className="form-control"
      />
      
      <input
        type="password"
        id="contra"
        name="contra"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password" className="form-control"
        style={{marginTop:'5px'}}
      />
      
      <div className="col-md-12" style={{textAlign:'center',marginTop:'15px'}} >
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="btn btn-success" onClick={handleLogin} disabled={loading}>
        {loading ? "Ingresando..." : "Sign in"}
      </button>
      </div>
      <p >¿Don't you have an acocunt yet?</p>
      <div className="col-md-12 row">
      <div className="col-md-6" style={{textAlign:'left'}}>
      <button className="btn btn-info"><Link to="/register" className="link">¡Sign up!</Link></button>
      </div>
      <div className="col-md-6" style={{textAlign:'right'}}>
      <button className="btn btn-dark"><Link to="/" className="link">Home</Link></button>
      </div>
      </div>
    </div>
    <div className="col-md-4"></div>
    </div>
    </div>
  );
}

export default LoginForm;
