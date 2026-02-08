import { Request, Response } from "express";

const getDashboardPage = (req: Request, res: Response) => {
  return res.render("admin/dashboard/show.ejs");
};

const getAdminUserPage = (req: Request, res: Response) => {
  return res.render("admin/user/show.ejs");
};

const getAdminProductPage = (req: Request, res: Response) => {
  return res.render("admin/product/show.ejs");
};

const getAdminOrderPage = (req: Request, res: Response) => {
  return res.render("admin/order/show.ejs");
};

export {
  getDashboardPage,
  getAdminUserPage,
  getAdminProductPage,
  getAdminOrderPage,
};
