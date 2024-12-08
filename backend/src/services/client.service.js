import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export const createClient = async (username, password, cpf) => {
  const client = await prismaClient.$transaction(async (prisma) => {
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    const client = await prisma.client.create({
      data: {
        userId: user.id,
        cpf,
      },
    });
  });
  return client;
};

export const listTransactions = async (clientId) => {
  return prismaClient.transaction.findMany({
    where: { clientId },
  });
};

export const addPix = async (clientId, amount) => {
  return prismaClient.transaction.create({
    data: {
      clientId,
      amount,
    },
  });
};

export const getUserByUsername = async (username) => {
  return prismaClient.user.findFirst({
    where: { username },
  });
};
