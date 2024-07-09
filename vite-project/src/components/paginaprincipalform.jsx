import getP from '../services/products/getP';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import background1 from '../assets/img/gibson.png'
import background2 from '../assets/img/fender.png'
import background3 from '../assets/img/jackson.png'
import background4 from '../assets/img/epiphone.png'
import '../styles/modificaciones.css'

const PaginaPrincipalForm = () => {
  const [products, setProducts] = useState([]);
  const [gibson] = useState('gibson');
  const [fender] = useState('fender');
  const [jackson] = useState('jackson');
  const [epiphone] = useState('epiphone');
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

  return (
    <div>
      <div className='main'>
        <h1 className='titulo'>GuitarStore's Stairway to Heaven</h1>
        <h4 className='titulo2'>"Your journey to music heaven."</h4>
        <button style={{backgroundImage:`url(${background1})`, backgroundSize: '100px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} onClick={() => validaInformacion(gibson)} className='botonpp' id={gibson}></button>
        <button style={{backgroundImage:`url(${background2})`, backgroundSize: '100px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} onClick={() => validaInformacion(fender)} className='botonpp' id={fender}></button>
        <button style={{backgroundImage:`url(${background3})`, backgroundSize: '100px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} onClick={() => validaInformacion(jackson)} className='botonpp' id={jackson}></button>
        <button style={{backgroundImage:`url(${background4})`, backgroundSize: '100px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} onClick={() => validaInformacion(epiphone)} className='botonpp' id={epiphone}></button>
        <div className='row col-md-14'>
          {resultado.map((e, index) => (
            <div key={index} className='col-md-2'>
              <p>{e.brand}</p>
              <p>{e.instrument}</p>
              <p>{e.model}</p>
              <p>{e.specifics}</p>
              <p>{e.price}</p>
              <p>
                <img src={e.imagenUrl} style={{ width: '200px', height: '200px' }} alt={e.brand} />
              </p>
              <p>
                <button className='boton'>comprar</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginaPrincipalForm;
