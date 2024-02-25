import { Prisma, User } from '@prisma/client';

export default abstract class UserRepository {
  abstract findByUsername(username: string): Promise<User | null>;
  abstract create(
    data: Partial<Prisma.UserCreateInput>,
  ): Promise<Prisma.UserCreateInput>;
}
