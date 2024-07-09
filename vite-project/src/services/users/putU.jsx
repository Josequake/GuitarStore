import axios from 'axios';

const putU = async (id, userData) => {
  const url = `http://localhost:3001/user/${id}`; 
  try {
    await axios.put(url, userData);
    
  } catch (error) {
    throw new Error(`Error al actualizar usuario: ${error.message}`);
  }
};

export default putU;