import { Body, Controller, Post } from '@nestjs/common';
import {
  SendOtpForSignUpBusinessUseCase,
  SignUpBusinessUseCase,
  SignUpPersonalUseCase
} from 'src/modules/users/domain/use-case';
import { SendOtpForSignUpBusinessDto, SignUpBusinessDto, SignUpPersonalDto } from '../dtos';
import {
  ApiSuccessResponse,
  ApiSuccessResponseWithDataIsNull,
  SuccessResponse
} from 'src/common/responses';
import { SendOtpForSignUpBusinessResponse, SignUpPersonalResponse } from '../responses';
import { ApiTags } from '@nestjs/swagger';
import { ENDPOINT } from 'src/common/enum/endpoint';

@ApiTags('Auth')
@Controller(ENDPOINT.AUTH_V1)
export class AuthController {
  constructor(
    private readonly signUpPersonalUseCase: SignUpPersonalUseCase,
    private readonly signUpBusinessUseCase: SignUpBusinessUseCase,
    private readonly sendOtpForSignUpBusinessUseCase: SendOtpForSignUpBusinessUseCase
  ) {}

  @Post('personal/sign-up')
  @ApiSuccessResponse(SignUpPersonalResponse)
  async signUp(@Body() dto: SignUpPersonalDto) {
    const result = await this.signUpPersonalUseCase.execute(dto);
    const response = new SignUpPersonalResponse(result);
    return SuccessResponse.call(response.toJSON());
  }

  @Post('business/sign-up')
  @ApiSuccessResponseWithDataIsNull()
  async signUpBusiness(@Body() body: SignUpBusinessDto) {
    await this.signUpBusinessUseCase.execute({ ...body });
    return SuccessResponse.call(null);
  }

  @Post('business/send-otp-sign-up')
  async sendOtpViaEmail(@Body() data: SendOtpForSignUpBusinessDto) {
    const token = await this.sendOtpForSignUpBusinessUseCase.execute(data.email);
    const response = new SendOtpForSignUpBusinessResponse({ token });
    return SuccessResponse.call(response.toJSON());
  }
}
