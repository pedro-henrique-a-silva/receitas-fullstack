import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function userSeed() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'user01',
        username: 'email@email.com',
        password: '123456',
      },
      {
        id: 2,
        name: 'user02',
        username: 'email2@email.com',
        password: '123456',
      },
    ],
  });
}
