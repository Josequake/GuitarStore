import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import GetU from '../services/users/getU'; 

function Navbarform() {
  const [usuarioLogueado, setUsuarioLogueado] = useState('');

  const fetchUsuarioLogueado = async () => {
    try {
      const response = await GetU(); 
      if (response && response.name) {
        setUsuarioLogueado(response.name);
      }
    } catch (error) {
      console.error('Error al obtener el usuario logueado:', error);
      
    }
  };

  useEffect(() => {
    fetchUsuarioLogueado();
  }, []);

  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/login">
          Login
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/register">
          Registrarse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h1>Bienvenido</h1>
            {usuarioLogueado && <p>{usuarioLogueado}</p>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarform;
