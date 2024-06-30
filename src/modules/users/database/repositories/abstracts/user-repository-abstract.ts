import { UserModel } from 'src/modules/users/domain/models';

export abstract class UserRepositoryAbstract {
  abstract create(data: UserModel): Promise<UserModel>;
  abstract findOneByEmail(email: string): Promise<UserModel>;
}
