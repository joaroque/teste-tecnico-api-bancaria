import {
  addPix,
  createClient,
  listTransactions,
} from "../services/client.service.js";

export const createClientController = async (req, res) => {
  const { username, password, cpf } = req.body;

  if (!username || !password || !cpf) {
    return res.status(401).json({ error: "Internal server error" });
  }

  const client = await createClient(username, password, cpf);
  return res
    .json({ msg: "Operação realizada com sucesso!", data: client })
    .status(201);
};

export const listTransactionsController = async (req, res) => {
  const { clientId } = req.params;

  const list = await listTransactions(clientId);
  return res
    .status(200)
    .json({ msg: "Operação realizada com sucesso!", data: list });
};

export const addPixController = async (req, res) => {
  const { clientId } = req.params;
  const { amount } = req.body;

  const pix = await addPix(clientId, amount);
  return res
    .status(200)
    .json({ msg: "Operação realizada com sucesso!", data: pix });
};
