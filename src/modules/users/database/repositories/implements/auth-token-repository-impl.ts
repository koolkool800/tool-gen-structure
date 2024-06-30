import { Repository } from 'typeorm';
import { AuthTokenEntity } from '../../entities/auth-token-entity';
import { AuthTokenRepositoryAbstract } from '../abstracts/auth-token-repository-abstract';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthTokenModel } from 'src/modules/users/domain/models/auth-token-model';

export class AuthTokenRepositoryImpl extends AuthTokenRepositoryAbstract {
  constructor(
    @InjectRepository(AuthTokenEntity)
    private readonly authTokenRepository: Repository<AuthTokenEntity>
  ) {
    super();
  }

  async create(authTokenModel: AuthTokenModel): Promise<AuthTokenModel> {
    const entity = await this.authTokenRepository.save(authTokenModel.toEntity());
    return entity.toModel();
  }
}
