import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function TextLinkExample() {
  const [nombreUsuario, setNombreUsuario] = useState('');

  useEffect(() => {
    const fetchNombreUsuario = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user');
        setNombreUsuario(response.data.nombre);
      } catch (error) {
        console.error('Error al obtener el nombre de usuario:', error);
        
      }
    };

    fetchNombreUsuario();
  }, []); 

  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/quiensomos">Sobre nosotros</Navbar.Brand>
        <Navbar.Brand as={Link} to="/login">Login</Navbar.Brand>
        <Navbar.Brand as={Link} to="/register">Registrarse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {nombreUsuario ? (
              `Bienvenido, ${nombreUsuario}`
            ) : (
              <Link to="/login">Bienvenido</Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
