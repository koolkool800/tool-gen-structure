import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/users/database/entities';
import { Repository } from 'typeorm';

@Controller('/v1/users')
export class UsersController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}

  @Get('/test')
  async findOneUser() {}
}
