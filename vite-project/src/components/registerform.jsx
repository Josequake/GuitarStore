import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostUregister from "../services/users/postUregister";
import Swal from "sweetalert2";
import getU from "../services/users/getU";

const RegisterForm = () => {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("")

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
        Swal.fire("Please fill all fields");
        return;
      }

      // Comprueba si el correo electrónico ya está registrado
      const correoRegistrado = users.find((user) => user.email === correo);
      if (correoRegistrado) {
        Swal.fire("This email is already registered");
        return;
      }

      // Registrar usuario si el correo electrónico no está registrado
      await PostUregister(nombre, correo, contra);
      Swal.fire("User registered successfully!");
      setNombre("");
      setCorreo("");
      setContra("");

      // Actualizar la lista de usuarios después de registrar uno nuevo
      const updatedUsers = [...users, { nombre, correo, contra }];
      setUsers(updatedUsers);
    } catch (error) {
      alert("Error adding user: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" style={{ border: '1px solid black', borderRadius: '7px', padding: '20px' }}>
          <h1 className="titulo">User Register</h1>

          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Name"
            className="form-control"
          />

          <input
            type="text"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Email"
            className="form-control"
          />

          <input
            type="password"
            id="contra"
            name="contra"
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            placeholder="Password"
            className="form-control"
          />

          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <button className="btn btn-success" onClick={agregarUsuario}>
              Sign up
            </button>
          </div>
          <p>If you already have an account</p>
          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-info" style={{textAlign:'left'}}>
                <Link to="/login" className="link">
                  Sign in
                </Link>
              </button>
            </div>
            <div className="col-md-6" style={{textAlign:'right'}}>
              <button className="btn btn-dark" style={{marginTop:'5px'}}><Link to="/" className="link">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
