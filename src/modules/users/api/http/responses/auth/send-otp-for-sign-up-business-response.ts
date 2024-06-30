import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/common/responses';

export class SendOtpForSignUpBusinessResponse extends BaseResponse {
  @ApiProperty({
    example: 'abcxyz12345'
  })
  token: string;

  constructor(data: { token: string }) {
    super();
    this.token = data.token;
  }

  toJSON(): Record<string, any> {
    return {
      token: this.token
    };
  }
}
