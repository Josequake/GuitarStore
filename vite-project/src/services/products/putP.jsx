import axios from 'axios';

const putP = async (id, userData) => {
  const url = `http://localhost:3001/products/${id}`; 
  try {
    await axios.put(url, userData);
    
  } catch (error) {
    throw new Error(`Error al actualizar producto: ${error.message}`);
  }
};

export default putP;