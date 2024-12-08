import cors from "cors";
import "dotenv/config.js";
import express from "express";
import clientRouter from "./routes/client.router.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", clientRouter);

// @ts-ignore
app.get("/", (req, res) => {
  return res.json({ message: "Teste técnico ValidaPix" }).sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
