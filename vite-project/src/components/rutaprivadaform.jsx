import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GetU } from "../services/users/getU"; // Asumiendo que GetU es una función de la API para obtener datos del usuario

const Rutaprivadaform = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuarioSi, setUsuarioSi] = useState("");

  const UsuarioLogueado = async () => {
    try {
      const response = await GetU(); // Llamada a la API para obtener datos del usuario

      if (response && response.range && response.range !== "") {
        setIsAuthenticated(true); // Autenticación exitosa si el rango no es "vaion"
        setUsuarioSi(response.name); // Guardamos el nombre del usuario en el estado
      } else {
        setIsAuthenticated(false); // Si el rango es "vaion" o no hay respuesta válida, no está autenticado
      }
    } catch (error) {
      console.error("Error al obtener el usuario logueado:", error);
      setIsAuthenticated(false); // Manejo de errores: no está autenticado
    }
  };

  useEffect(() => {
    UsuarioLogueado(); // Llamamos a la función al cargar el componente
  }, []);

  return isAuthenticated ? (
    <Component usuario={usuarioSi} />
  ) : (
    <Navigate to="/" />
  );
};

export default Rutaprivadaform;
