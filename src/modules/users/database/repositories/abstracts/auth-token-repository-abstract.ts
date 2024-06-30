import { AuthTokenModel } from 'src/modules/users/domain/models';

export abstract class AuthTokenRepositoryAbstract {
  abstract create(authTokenModel: AuthTokenModel): Promise<AuthTokenModel>;
}
