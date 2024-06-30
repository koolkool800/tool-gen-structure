import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignUpBusinessDto {
  @ApiProperty({
    example: '123321'
  })
  @IsString()
  token: string;
}
