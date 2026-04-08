const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', login);

// Ruta protegida de ejemplo
router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Perfil del usuario",
    user: req.user
  });
});

module.exports = router;