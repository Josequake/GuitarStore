import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import "bootstrap/dist/css/bootstrap.min.css";

function footerform() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Sobre Nosotros
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
        <h1>Sobre Nosotros</h1>

<p>¡Bienvenidos a Quake guitar store, donde la música cobra vida a través de guitarras excepcionales! Nos especializamos en ofrecer una selección <br />
cuidadosamente curada de guitarras acústicas, eléctricas y clásicas, junto con accesorios y equipos premium. Nuestro equipo de músicos y expertos está aquí <br />
para guiar y inspirar a cada cliente, desde principiantes hasta profesionales.</p>

Misión: <br />

Proveer a nuestros clientes guitarras y equipos de música de la más alta calidad, creando un ambiente acogedor y educativo que fomente la pasión y la creatividad musical.

<br />
Visión: <br />

Ser reconocidos como el destino preferido por músicos en busca de excelencia en instrumentos y servicio al cliente, estableciendo un estándar de calidad y dedicación en la industria musical.

Contáctanos
Estamos ubicados en Mall San FranderYMarilyn. Puedes visitarnos de lunes a sábado de 9am a 5pm, o contáctanos por teléfono al o por correo electrónico a jose@guitarstore. <br />
¡Esperamos poder ayudarte a encontrar la guitarra perfecta para ti!
        </div>
      </Fade>
    </>
  );
}

export default footerform