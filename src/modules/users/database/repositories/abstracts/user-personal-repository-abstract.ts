import { UserModel, UserPersonalModel } from 'src/modules/users/domain/models';
import { AuthTokenModel } from 'src/modules/users/domain/models/auth-token-model';

export abstract class UserPersonalRepositoryAbstract {
  abstract create(data: UserPersonalModel): Promise<UserPersonalModel>;
}
