import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/common/responses';

export class SignUpPersonalResponse extends BaseResponse {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxNjIzOTAyMn0.1b2b7'
  })
  accessToken: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxNjIzOTAyMn0.1b2b7'
  })
  refreshToken: string;

  constructor(data: { accessToken: string; refreshToken: string }) {
    super();
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
  }

  toJSON(): Record<string, any> {
    return {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken
    };
  }
}
