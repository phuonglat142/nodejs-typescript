import { getDashboardPage } from "controllers/admin/dashboard.controller";
import express, { Express } from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
  // admin routes
  router.get("/admin", getDashboardPage);

  app.use("/", router);
};

export default webRoutes;
