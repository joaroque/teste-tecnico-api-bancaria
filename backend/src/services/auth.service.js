import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByUsername } from "./client.service.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (username, password) => {
  const user = await getUserByUsername(username);

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return false;
  }

  const payload = {
    clientId: user.client.id,
    username: user.username,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
};
