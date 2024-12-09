import { Router } from "express";
import {
  addPixController,
  createClientController,
  listTransactionsController,
} from "../controllers/client.controllers.js";
import verifyToken from "../middlewares/auth.middleware.js";
import verifyUser from "../middlewares/verify-user.middleware.js";

const clientRouter = Router();

clientRouter.get(
  "/pix/:clientId",
  verifyToken,
  verifyUser,
  listTransactionsController
);
clientRouter.post("/", createClientController);
clientRouter.post("/pix/:clientId", verifyToken, verifyUser, addPixController);

export default clientRouter;
