import * as authService from '../services/auth.service.js';

export function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }

  const user = authService.authenticateUser(username, password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = authService.generateToken(user);

  res.json({ token });
}