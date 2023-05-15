// src/services/auth.js
import axios from 'axios';

const authenticateUser = async (email, password) => {
  try {
    const response = await axios.post('https://montywebadmin.andyel.repl.co/api/users/login', {
      email: email,
      password: password
    });

    // Devuelve el token en lugar de la respuesta completa
    return response.data;
  } catch (error) {
    throw error;
  }
};

const auth = {
  authenticateUser
};

export default auth;


