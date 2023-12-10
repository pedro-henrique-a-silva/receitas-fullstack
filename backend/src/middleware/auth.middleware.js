const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const authBearer = req.header('Authorization');

  if (!authBearer) {
    return res.status(401).json({message: "token not found"})
  }

  const token = authBearer.split(' ')[1];

  try {
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = tokenDecoded.payload

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Expired or Invalid Token" })
  }
}

module.exports = {
  auth
}