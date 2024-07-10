import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import GetU from '../services/users/getU'; 
import background from '../assets/img/cielo.png';

function Navbarform() {
  const [usuarioSi, setUsuarioSi] = useState('');
  const [userlog, setUserlog] = useState('');
  const [userr, setUserr] = useState('');
  const UsuarioLogueado = async () => {
    try {
      const response = await GetU(); 
      
      if (response && response.name) {
        setUsuarioSi(response.name);
        setUserlog(localStorage.setItem(usuarioSi));
        setUserr(localStorage.getItem(usuarioSi))

      }
    } catch (error) {
      console.error('Error al obtener el usuario logueado:', error);
    }
  };

  useEffect(() => {
    UsuarioLogueado();
  }, []);

  return (
    <Navbar style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand className="sign" as={Link} to="/login">
          Sign in!
        </Navbar.Brand>
        <Navbar.Brand className="sign" as={Link} to="/register">
          Sign up!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h1 className="sign">Welcome to guitar paradise!</h1>
            <div>
              {userlog && 
                <p>{userr}</p>
              }
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarform;
