import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ErrorException } from 'src/config/exception';
import { UserRepositoryAbstract } from 'src/modules/users/database/repositories';
import { OTP_TYPE, USERS_ERROR_CODE } from '../../enum';
import { CreateOtpUseCase } from './create-otp-use-case';
import { EmailService } from 'src/modules/common/email/email-service';

@Injectable()
export class SendOtpForSignUpBusinessUseCase {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
    private readonly userRepositoryAbstract: UserRepositoryAbstract,
    private readonly createOtpUseCase: CreateOtpUseCase,
    private readonly emailService: EmailService
  ) {}

  async execute(email: string): Promise<string> {
    await this.checkEmailExist(email);
    const otpModel = await this.createOtpUseCase.execute({
      email,
      type: OTP_TYPE.SIGN_UP_BUSINESS,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5mins later
    });
    this.emailService.sendEmail({
      subject: 'TEST',
      to: email,
      content: `${otpModel.getOtp()}`
    });
    return otpModel.getId();
  }

  private async checkEmailExist(email: string) {
    const userModel = await this.userRepositoryAbstract.findOneByEmail(email);
    if (userModel) {
      throw new ErrorException(USERS_ERROR_CODE.EMAIL_ALREADY_EXIST, 'Email already exist');
    }
  }
}
