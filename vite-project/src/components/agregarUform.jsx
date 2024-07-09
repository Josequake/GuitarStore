import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostU from "../services/users/postU";
import Swal from "sweetalert2";
import background from "../assets/img/engranaje.avif";
import getU from '../services/users/getU';

const agregarUform = () => {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [rango, setRango] = useState("");

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

  const agregarAdmin = async () => {
    try {
      if (nombre === "" || correo === "" || contra === "" || rango === "") {
        Swal.fire("Por favor rellene todos los espacios");
        return;
      }

      
      const correoRegistrado = users.find(user => user.email === correo);
      if (correoRegistrado) {
        Swal.fire("Este correo ya está registrado");
        return;
      }

     
      await PostU(nombre, correo, contra, rango);
      Swal.fire("Usuario ingresado con éxito!");
      setNombre("");
      setCorreo("");
      setContra("");
      setRango("");

      
      const updatedUsers = [...users, { nombre, correo, contra, rango }];
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
      <h1 className="titulo">Registro de Admin</h1>
      <h3 className="h3">Ingrese el nombre del Admin</h3>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        className="inputregister"
      />
      <h3 className="h3">Correo del Administrador</h3>
      <input
        type="text"
        id="correo"
        name="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="Correo"
        className="inputregister"
      />
      <h3 className="h3">Contrasena del administrador</h3>
      <input
        type="password"
        id="contra"
        name="contra"
        value={contra}
        onChange={(e) => setContra(e.target.value)}
        placeholder="Contraseña"
        className="inputregister"
      />
      <h3 className="h3">Rango del administrador</h3>
      <input
        type="text"
        id="rango"
        name="rango"
        value={rango}
        onChange={(e) => setRango(e.target.value)}
        placeholder="rango"
        className="inputregister"
      />
      <button className="boton" onClick={agregarAdmin}>Agregar Admin</button>
      
      <h6>
        <button className="boton"><Link to="/" className="link">Página Principal</Link></button>
      </h6>
    </div>
  );
};

export default agregarUform;
