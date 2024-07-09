import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostUregister from "../services/users/postUregister";
import Swal from "sweetalert2";
import background from "../assets/img/engranaje.avif";
import getU from '../services/users/getU';

const registerForm = () => {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getU();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const agregarUsuario = async () => {
    try {
      if (nombre === "" || correo === "" || contra === "") {
        Swal.fire("Por favor rellene todos los espacios");
        return;
      }

      // Verificar si el correo ya está registrado
      const correoRegistrado = users.find(user => user.email === correo);
      if (correoRegistrado) {
        Swal.fire("Este correo ya está registrado");
        return;
      }

      // Si el correo no está registrado, procedemos a registrar al usuario
      await PostUregister(nombre, correo, contra);
      Swal.fire("Usuario ingresado con éxito!");
      setNombre("");
      setCorreo("");
      setContra("");

      // Actualizar la lista de usuarios después de registrar uno nuevo
      const updatedUsers = [...users, { nombre, correo, contra }];
      setUsers(updatedUsers);

    } catch (error) {
      alert("Error al agregar usuario: " + error.message);
    }
  };

  return (
    <div
      className="content"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="titulo">Registro de Usuario</h1>
      <h3 className="h3">Ingrese el nombre del usuario</h3>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        className="inputregister"
      />
      <h3 className="h3">Ingrese el correo del usuario</h3>
      <input
        type="text"
        id="correo"
        name="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="Correo"
        className="inputregister"
      />
      <h3 className="h3">Ingrese la contraseña del usuario</h3>
      <input
        type="password"
        id="contra"
        name="contra"
        value={contra}
        onChange={(e) => setContra(e.target.value)}
        placeholder="Contraseña"
        className="inputregister"
      />
      <button className="boton" onClick={agregarUsuario}>Registrarse</button>
      <h6>
        ¿Ya tienes una cuenta? 
        <button className="boton"><Link to="/login" className="link">Inicia sesión</Link></button>
      </h6>
      <h6>
        <button className="boton"><Link to="/" className="link">Página Principal</Link></button>
      </h6>
    </div>
  );
};

export default registerForm;
