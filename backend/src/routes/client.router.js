import { Router } from "express";
import {
  addPixController,
  createClientController,
  listTransactionsController,
} from "../controllers/client.controllers.js";

const clientRouter = Router();

clientRouter.get("/pix:clientId", listTransactionsController);
clientRouter.post("/", createClientController);
clientRouter.post("/pix/:clientId", addPixController);

export default clientRouter;
