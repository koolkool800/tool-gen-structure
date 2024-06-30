import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPersonalModel } from 'src/modules/users/domain/models';
import { UserPersonalRepositoryAbstract } from '../abstracts';
import { UserPersonalEntity } from '../../entities';

export class UserPersonalRepositoryImpl extends UserPersonalRepositoryAbstract {
  constructor(
    @InjectRepository(UserPersonalEntity)
    private readonly userPersonalRepository: Repository<UserPersonalEntity>
  ) {
    super();
  }

  async create(data: UserPersonalModel): Promise<UserPersonalModel> {
    const entity = await this.userPersonalRepository.save(data.toEntity());
    return entity.toModel();
  }
}
