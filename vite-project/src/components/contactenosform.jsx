import React, { useState } from 'react'
import "../styles/contactenos.css"
import Imagen from '../assets/img/imagen.avif'
const contactenosform = () => {
  
  const [contac,setContac] = useState("")
  const [misio,setMision] = useState("")
  const [visio,setVision] = useState("")
    
    const contact = () => {
      setContac("")
    }
    const mision = () => {
      setMision("Misión",
        "Nuestra misión es proporcionar a músicos de todos los niveles",
        "las mejores guitarras y accesorios," ,
        "ofreciendo un servicio personalizado" ,
        "y asesoramiento experto. Nos dedicamos a inspirar y apoyar a la comunidad musical," ,
        "fomentando la creatividad y la pasión por la música",
        "a través de productos de alta calidad y una atención al cliente excepcional.")
    }
    const vision = () => {
      setVision("Visión Nuestra visión es convertirnos en la tienda de guitarras líder a nivel nacional, reconocida por nuestra amplia selección de productos, nuestro compromiso con la calidad y nuestro servicio al cliente inigualable. Aspiramos a ser un punto de referencia para músicos de todo el mundo, creando un espacio donde la música florezca y los sueños se hagan realidad.")
    }



  return (
   
    <div>
      

      <button onClick={(contact)}>Contactenos</button>
      <button onClick={(mision)}>Mision</button>
      <button onClick={(vision)}>Vision</button>
   
      <div class="contenedor">
          <img  src={Imagen}/>
          <div>
          <p class="centrado">{contac}</p>
          </div>
          <div>
          <p class="centrado">{misio}</p>
          </div>
          <div>
          <p class="centrado">{visio}</p>
          </div>
    </div>
      
    
        
    </div>
  )
}

export default contactenosform
