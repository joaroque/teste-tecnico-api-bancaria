import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  const formatedToken = token.split(" ")[1];
  try {
    const tokenDecoded = jwt.verify(formatedToken, JWT_SECRET);
    req.clientId = tokenDecoded.clientId;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

export default verifyToken;