import {
  createUserAPI,
  getAllUsersAPI,
  getUserByIdAPI,
} from "controllers/client/api.controller";
import express, { Express } from "express";
import validate from "middlewares/validate";
import { RegisterSchema } from "validations/user.schema";

const router = express.Router();

const apiRoutes = (app: Express) => {
  //Get all users
  router.get("/users", getAllUsersAPI);
  //Get user by id
  router.get("/users/:id", getUserByIdAPI);
  //Create user
  router.post("/users", validate(RegisterSchema), createUserAPI);

  app.use("/api", router);
};

export default apiRoutes;
