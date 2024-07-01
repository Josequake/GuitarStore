import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function TextLinkExample() {

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Link to="/contactenos">Sobre nosotros</Link></Navbar.Brand>
        <Navbar.Brand href="#home"><Link to="/login">Login</Link></Navbar.Brand>
        <Navbar.Brand href="#home"><Link to="/register">Registrarse</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Bienvenido: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;