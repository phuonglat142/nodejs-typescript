import { NextFunction, Response } from "express";
import {
  createUser,
  handleGetAllUser,
  handleGetUserById,
} from "services/client/api.service";
import { TypedRequest } from "types/express";
import { TRegisterSchema } from "validations/user.schema";

const getAllUsersAPI = async (req: TypedRequest, res: Response) => {
  const users = await handleGetAllUser();

  res.status(200).json({
    message: "Get all users successfully",
    data: users,
  });
};

const getUserByIdAPI = async (
  req: TypedRequest<any, { id: string }>,
  res: Response,
) => {
  const { id } = req.params;

  const user = await handleGetUserById(+id);

  res.status(200).json({
    message: "Get user by id successfully",
    data: user,
  });
};

const createUserAPI = async (
  req: TypedRequest<TRegisterSchema>,
  res: Response,
  next: NextFunction,
) => {
  const { email, password, fullName } = req.body;

  const user = await createUser(email, password, fullName);

  res.status(201).json({
    message: "Create user successfully",
    data: user,
  });
};

export { getAllUsersAPI, getUserByIdAPI, createUserAPI };
