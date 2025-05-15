const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Get the token from the Authorization header (format: Bearer <token>)
  const token = req.header('Authorization')?.split(' ')[1];

  // If no token is found
  if (!token) return res.status(401).json({ message: 'No token' });

  try {
    // Verify token using the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID from the token payload to the request
    req.user = decoded.id;

    // Proceed to next middleware or controller
    next();
  } catch (err) {
    // Token is invalid or expired
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
