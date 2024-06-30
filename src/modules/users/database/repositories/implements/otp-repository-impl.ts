import { OtpModel } from 'src/modules/users/domain/models';
import { OtpRepositoryAbstract } from '../abstracts/otp-repository-abstract';
import { Repository } from 'typeorm';
import { OtpEntity } from '../../entities/otp-entity';
import { InjectRepository } from '@nestjs/typeorm';

export class OtpRepositoryImpl extends OtpRepositoryAbstract {
  constructor(
    @InjectRepository(OtpEntity)
    private readonly otpRepository: Repository<OtpEntity>
  ) {
    super();
  }

  async create(otpModel: OtpModel): Promise<OtpModel> {
    const otpEntity = await this.otpRepository.save(otpModel.toEntity());
    return otpEntity.toModel();
  }
}
