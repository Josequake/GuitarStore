import React from "react";

const modificarUform = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [rango, setRango] = useState("");

  const modificarUsuario= async () => {

  };
  const agregarAdmin = async () => {
    try {
      await PostU(nombre, correo, contra, rango); 
      
      setNombre('');
      setCorreo('');
      setContra('');
      setRango('');
    } catch (error) {
      alert('Error al agregar usuario: ' + error.message);
    }
  };

  };
  return (
    <div>
      <h1>Modificar Usuario</h1>
      <p>Ingrese el ID del usuario que desea modificar:</p>
      <input
        type="text"
        name="id"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={modificarUsuario}>Modificar</button>
      <h1>Registro de Administrador</h1>
      <p>Ingrese el nombre del Admin</p>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Creacion del correo del Admin</p>
      <input
        type="text"
        id="correo"
        name="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <p>Ingrese la contraseña del Admin</p>
      <input
        type="password"
        id="contra"
        name="contra"
        value={contra}
        onChange={(e) => setContra(e.target.value)}
      />
      <p>Ingrese el rango del Admin</p>
      <input
        type="text"
        id="rango"
        name="rango"
        value={rango}
        onChange={(e) => setRango(e.target.value)}
      />
      <p>
        <button onClick={agregarAdmin}>Registrar Admin</button>
      </p>
      <p>
        <Link to="/">Ir a página principal</Link>
      </p>
    </div>
  );


export default modificarUform;
