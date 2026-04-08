// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/database');

// Clave secreta para JWT (en proyecto real usar variable de entorno)
const JWT_SECRET = "mi_secreto_para_jwt";

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Datos incompletos" });
  }

  // Buscar usuario en la base de datos
  const query = `SELECT * FROM users WHERE email = ?`;
  db.get(query, [email], (err, user) => {
    if (err) {
      console.error("Error al consultar DB:", err.message);
      return res.status(500).json({ message: "Error interno del servidor" });
    }

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Comparar password con bcrypt
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error bcrypt:", err);
        return res.status(500).json({ message: "Error interno del servidor" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      // Generar JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
      );


      // Responder con token y usuario
      res.status(200).json({
        message: "Login correcto",
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      });
    });
  });
};

module.exports = { login };