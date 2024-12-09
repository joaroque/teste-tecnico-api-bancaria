import { login } from "../services/auth.service.js";

export const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ error: "Username or password invalid." });
  }

  const token = await login(username, password);

  if (!token) {
    return res.status(401).json({ error: "Username or password invalid." });
  }
  return res.status(200).json({ msg: "Logged successfuly", token });
};
