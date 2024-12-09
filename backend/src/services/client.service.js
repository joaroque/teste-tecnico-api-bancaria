import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prismaClient = new PrismaClient();

export const createClient = async (username, password, cpf) => {
  const client = await prismaClient.$transaction(async (prisma) => {
    // todo: adicionar lista de pix vazio

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return await prisma.client.create({
      data: {
        userId: user.id,
        cpf,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
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
  return prismaClient.user.findUnique({
    where: { username },
    include: {
      client: true,
    },
  });
};

export const getUserById = async (id) => {
  return prismaClient.user.findUnique({
    where: { id },
    include: {
      client: {
        select: { id: true },
      },
    },
  });
};
