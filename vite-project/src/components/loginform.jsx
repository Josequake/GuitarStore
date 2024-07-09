import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import background from "../assets/img/engranaje.avif";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const url = "http://localhost:3001/user";
      const response = await axios.get(url);
      const usuarios = response.data;

      const usuarioExistente = usuarios.find(
        (usuario) => usuario.email === email
      );
      if (!usuarioExistente || usuarioExistente.password !== password) {
        Swal.fire("Correo o contraseña incorrectos");
      } else if (
        usuarioExistente.email === email &&
        usuarioExistente.password === password &&
        usuarioExistente.range !== ""
      ) {
        setTimeout(() => {
          Swal.fire("Bienvenido Administrador!");
        }, 10);
        navigate("/modificaciones");
      } else {
        Swal.fire("Ingreso con exito");
        navigate("/");
      }
    } catch (error) {
      console.error("Error al cargar datos:", error);
      setError(
        "Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="titulo">Ingrese Correo</h1>
      <input
        type="text"
        id="correo"
        name="correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="correo"
      />
      <h1 className="titulo">Ingrese contraseña</h1>
      <input
        type="password"
        id="contra"
        name="contra"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="contrasena"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="boton" onClick={handleLogin} disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
      <p>¿No tienes cuenta aún?</p>
      <p>
        <Link to="/register">¡Regístrate!</Link>
      </p>
      <p>
        <Link to="/">Ir a página principal</Link>
      </p>
    </div>
  );
}

export default LoginForm;
