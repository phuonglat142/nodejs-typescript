import { prisma } from "libs/prisma";
import { hashPassword } from "utils/hash";

const isEmailExist = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) return true;
  return false;
};

const handleGetAllUser = async () => {
  return await prisma.user.findMany();
};

const handleGetUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const createUser = async (
  email: string,
  password: string,
  fullName: string,
) => {
  const newPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: newPassword,
      fullName,
      username: email,
      accountType: "SYSTEM",
    },
  });

  return user;
};

export { handleGetAllUser, handleGetUserById, isEmailExist, createUser };
