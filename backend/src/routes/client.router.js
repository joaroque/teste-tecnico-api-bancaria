import { Router } from "express";
import {
  addPixController,
  createClientController,
  listTransactionsController,
} from "../controllers/client.controllers.js";

const clientRouter = Router();

clientRouter.get("/transactions/:clientId", listTransactionsController);
clientRouter.post("/", createClientController);
clientRouter.post("/add-pix/:clientId", addPixController);

export default clientRouter;
