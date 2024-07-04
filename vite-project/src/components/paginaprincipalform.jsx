import getP from '../services/products/getP';
import React, { useState, useEffect } from 'react';

const PaginaPrincipalForm = () => {
  const [products, setProducts] = useState([]);
  const [gibson, setGibson] = useState('gibson');
  const [fender, setFender] = useState('fender');
  const [jackson, setJackson] = useState('jackson');
  const [epiphone, setEpiphone] = useState('epiphone');
  const [resultado, setResultado] = useState([]);

  const mostrarProducto = async () => {
    const response = await getP();
    setProducts(response);
  };

  const validaInformacion = (id) => {
    let filteredProducts = [];
    if (id === gibson) {
      filteredProducts = products.filter((marca) => marca.brand === 'gibson');
    } else if (id === fender) {
      filteredProducts = products.filter((marca) => marca.brand === 'fender');
    } else if (id === jackson) {
      filteredProducts = products.filter((marca) => marca.brand === 'jackson');
    } else if (id === epiphone) {
      filteredProducts = products.filter((marca) => marca.brand === 'epiphone');
    }
    setResultado(filteredProducts);
  };

  useEffect(() => {
    mostrarProducto();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Bienvenido a Guitar Quake Store</h1>
      <h2>no apto para mancos</h2>
      <button onClick={() => validaInformacion(gibson)}>{gibson}</button>
      <button onClick={() => validaInformacion(fender)}>{fender}</button>
      <button onClick={() => validaInformacion(jackson)}>{jackson}</button>
      <button onClick={() => validaInformacion(epiphone)}>{epiphone}</button>
      <div>
        {resultado.map((e, index) => (
          <div key={index}>
            <p>{e.brand}</p>
            <p>{e.instrument}</p>
            <p>{e.model}</p>
            <p>{e.specifics}</p>
            <p>{e.price}</p>
            <p>
              <img src={e.imagenUrl} style={{ width: '100px', height: 'auto' }} alt={e.brand} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaPrincipalForm;
