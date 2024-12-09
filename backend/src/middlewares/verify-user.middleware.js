async function verifyUser(req, res, next) {
  const { clientId } = req.params;

  if (clientId != req.clientId) {
    return res.status(403).json({ error: "Unauthorized." });
  }

  next();
}

export default verifyUser;
