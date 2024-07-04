import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 

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

      const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
      if (!usuarioExistente || usuarioExistente.password !== password) {
        setError("Correo o contraseña incorrectos");
      } else if (usuarioExistente.email === email && usuarioExistente.password === password && usuarioExistente.range !== '') {
        alert("¡Bienvenido Administrador!");
        navigate("/modificaciones");
      } else {
        alert('Ingreso con exito');
        navigate("/");
     
          
    }

    ;
    } catch (error) {
      console.error("Error al cargar datos:", error);
      setError("Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Ingrese Correo</h1>
      <input
        type="text"
        id="correo"
        name="correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h1>Ingrese contraseña</h1>
      <input
        type="password"
        id="contra"
        name="contra"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
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

