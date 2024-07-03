import React from 'react'

const administratorform = () => {
  return (
    <div>
      <h1>Que desea hacer</h1>
      <button to={'/modificaciones'}>Agregar producto</button>
      <button>Modificar producto</button>
      <button>Eliminar producto</button>
    </div>
  )
}

export default administratorform
