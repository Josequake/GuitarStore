// Componente para registrar un nuevo administrador.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostU from "../services/users/postU";
import Swal from "sweetalert2";
import getU from '../services/users/getU';

//Funcion principal
const agregarUform = () => {
  // Estado para almacenar la lista de usuarios.
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [rango, setRango] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Realiza una solicitud GET para obtener la lista de usuarios.
        const response = await getU();
        setUsers(response);// Actualiza el estado con la lista de usuarios obtenida.
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();  // Llama a la función para obtener usuarios al cargar el componente.
  }, []);

  const agregarAdmin = async () => {
    try {
      // Verifica que todos los campos estén llenos antes de proceder
      if (nombre === "" || correo === "" || contra === "" || rango === "") {
        Swal.fire("Please fill in all the spaces");
        return;
      }

      // Verifica si el correo ya está registrado en la lista de usuarios.
      const correoRegistrado = users.find(user => user.email === correo);
      if (correoRegistrado) {
        Swal.fire("This email is already registered");
        return;
      }

     // Realiza una solicitud POST para agregar el nuevo usuario administrador.
      await PostU(nombre, correo, contra, rango);
      Swal.fire("User logged in successfully!");// Muestra una alerta de éxito utilizando SweetAlert2.
      // Limpia los campos del formulario después de agregar el usuario.
      setNombre("");
      setCorreo("");
      setContra("");
      setRango("");

      // Actualiza la lista de usuarios en el estado local.
      const updatedUsers = [...users, { nombre, correo, contra, rango }];
      setUsers(updatedUsers);

    } catch (error) {
      alert("Error adding user: " + error.message);
    }
  };

  return (
    <div className="container" style={{border:'1px solid black',borderRadius:'7px'}}>
      <h1 className="titulo">Admin register</h1>
      
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="name"
        className="form-control"
      />
      
      <input
        type="text"
        id="correo"
        name="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="email"
        className="form-control"
      />
      
      <input
        type="password"
        id="contra"
        name="contra"
        value={contra}
        onChange={(e) => setContra(e.target.value)}
        placeholder="password"
        className="form-control"
      />
      
      <input
        type="text"
        id="rango"
        name="rango"
        value={rango}
        onChange={(e) => setRango(e.target.value)}
        placeholder="range"
        className="form-control"
      />
      <button className="btn btn-success" onClick={agregarAdmin}>Add Admin</button>
      
      <h6>
        <button className="btn btn-dark" style={{marginTop:'5px'}}><Link to="/" className="link">Home</Link></button>
      </h6>
    </div>
  );
};

export default agregarUform;
