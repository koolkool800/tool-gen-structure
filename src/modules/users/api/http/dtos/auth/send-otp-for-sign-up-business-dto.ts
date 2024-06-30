import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class SendOtpForSignUpBusinessDto {
  @ApiProperty({
    example: 'artnprice-pro@gmail.com',
    required: true,
    description: 'This is email field'
  })
  @IsEmail()
  email: string;
}
