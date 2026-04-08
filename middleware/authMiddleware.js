// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = "mi_secreto_para_jwt";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Extraer token de forma robusta, elimina Bearer extra y espacios
  let token = authHeader.replace(/^Bearer\s+/i, '').trim();

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT INVALIDO:", error.message);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;