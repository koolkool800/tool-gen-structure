import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities';
import { UserRepositoryAbstract } from '../abstracts/user-repository-abstract';
import { FindOneOptions, Repository } from 'typeorm';
import { UserModel } from 'src/modules/users/domain/models';

export class UserRepositoryImpl extends UserRepositoryAbstract {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {
    super();
  }

  async create(data: UserModel): Promise<UserModel> {
    const entity = await this.usersRepository.save(data.toEntity());
    return entity.toModel();
  }

  async findOneByEmail(email: string): Promise<UserModel> {
    const user = await this.usersRepository.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return;
    }

    return user.toModel();
  }
}
