import { OtpModel } from 'src/modules/users/domain/models';

export abstract class OtpRepositoryAbstract {
  abstract create(otpModel: OtpModel): Promise<OtpModel>;
}
