
import getP from '../services/products/getP'
import React,{useState, useEffect} from 'react'

const paginaprincipalform = () => {
  const [products,setProducts] = useState([])
  const [gibson,setGibson]= useState([])
  const [fender,setFender]= useState([])
  const [jackson,setJackson]= useState([])
  const [epiphone,setEpiphone]= useState([])
  
  const mostrarProducto = async () => {
    const response = await getP()
    setProducts(response)
   
    
    
  };
  const validagibson = () => {
     const resultadoGibson = products.filter(marca => marca.brand == 'gibson');
     setGibson(resultadoGibson)
  };
  const validafender = () => {
    const resultadoFender = products.filter(marca => marca.brand == 'fender');
    setFender(resultadoFender)
  };
  const validajackson = () => {
    const resultadoJackson = products.filter(marca => marca.brand == 'jackson');
    setJackson(resultadoJackson)
  };
  const validaepiphone = () => {
    const resultadoEpiphone = products.filter(marca => marca.brand == 'epiphone');
    setEpiphone(resultadoEpiphone)
  };

  useEffect(() => {
    mostrarProducto()
  },[]);
  
  console.log(products)
  return (
    <div>
      <h1>Bienvenido a Guitar Quake Store</h1>
      <h2>no apto para mancos</h2>
      <button onClick={validagibson}>Gibson</button>
      <button onClick={validafender}>Fender</button>
      <button onClick={validajackson}>Jackson</button>
      <button onClick={validaepiphone}>Epiphone</button>
      <p>
        {gibson.map((e) => (
          <div>
           <p>
           {e.brand}
           </p>
           <p>
           {e.instrument}
           </p>
           <p>
           {e.model}
           </p>
           <p>
            {e.specifics}
           </p>
           <p>
            {e.price}
           </p>
           <p>
           <img src={e.imagenUrl}style={{ width: '100px', height: 'auto' }} />
           </p>
           </div>
          ))}
      </p>
      <p>
        {fender.map((e) => (
          <div>
           <p>
           {e.brand}
           </p>
           <p>
           {e.instrument}
           </p>
           <p>
           {e.model}
           </p>
           <p>
            {e.specifics}
           </p>
           <p>
            {e.price}
           </p>
           <p>
           <img src={e.imagenUrl}style={{ width: '100px', height: 'auto' }} />
           </p>
           </div>
          ))}
      </p>
      <p>
        {jackson.map((e) => (
          <div>
           <p>
           {e.brand}
           </p>
           <p>
           {e.instrument}
           </p>
           <p>
           {e.model}
           </p>
           <p>
            {e.specifics}
           </p>
           <p>
            {e.price}
           </p>
           <p>
           <img src={e.imagenUrl}style={{ width: '100px', height: 'auto' }} />
            </p>
           </div>
          ))}
      </p>
      <p>
        {epiphone.map((e) => (
          <div>
           <p>
           {e.brand}
           </p>
           <p>
           {e.instrument}
           </p>
           <p>
           {e.model}
           </p>
           <p>
            {e.specifics}
           </p>
           <p>
            {e.price}
           </p>
           <p>
           <img src={e.imagenUrl}style={{ width: '100px', height: 'auto' }} />
           </p>
           </div>
          ))}
      </p>
    </div>
  )
}
export default paginaprincipalform


