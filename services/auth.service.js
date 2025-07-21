// services/auth.service.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Datos hardcodeados para probar (en producción esto vendría de una BD)
const users = [
  {
    id: '1',
    username: 'admin',
    password: 'password123'  // Nunca guardar así en producción, es solo para pruebas
  }
];

// Función para validar usuario y contraseña
export function authenticateUser(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user || null;
}

// Generar JWT token
export function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}
