import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function userSeed() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'user01',
        username: 'email@email.com',
        password: await bcrypt.hash('123456', 10),
        // password: '123456',
      },
      {
        id: 2,
        name: 'user02',
        username: 'email2@email.com',
        password: await bcrypt.hash('123456', 10),
        // password: '123456',
      },
    ],
  });
}
