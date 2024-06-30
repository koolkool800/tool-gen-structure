import { Injectable } from '@nestjs/common';
import { OTP_TYPE } from '../../enum';
import { OtpRepositoryAbstract } from 'src/modules/users/database/repositories';
import { OtpModel } from '../../models';

interface IInput {
  email: string;
  type: OTP_TYPE;
  expiresAt: Date;
  numberOfDigits?: number;
}

@Injectable()
export class CreateOtpUseCase {
  private readonly DEFAULT_NUMBER_OF_DIGITS = 5;
  constructor(private readonly otpRepositoryAbstract: OtpRepositoryAbstract) {}

  /**
   *
   * @param data
   * email, type, numberOfDigits: number of digits you want to generate otp, default: 5
   * @description gen otp -> save otp into database
   * @returns otp model
   */
  async execute(data: IInput): Promise<OtpModel> {
    const otp = this.randomOtp(data.numberOfDigits || this.DEFAULT_NUMBER_OF_DIGITS);
    const otpModel = OtpModel.createNewModelForCreateEntity({
      email: data.email,
      otp,
      type: data.type,
      expiresAt: data.expiresAt
    });

    return await this.otpRepositoryAbstract.create(otpModel);
  }

  private randomOtp(numberOfDigits: number): string {
    return String(Math.floor(Math.random() * Number(`9`.repeat(numberOfDigits))));
  }
}
