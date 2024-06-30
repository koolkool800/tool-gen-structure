import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BANK_NAME } from 'src/modules/users/domain/enum';

export class SignUpPersonalDto {
  @ApiProperty({
    example: 'test@gmail.com'
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: '123456'
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  //fake step
  @ApiProperty({
    example: '0935797877'
  })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    example: 'Min young'
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  //step 1
  @ApiProperty({
    example: BANK_NAME.EXAMPLE
  })
  @IsEnum(BANK_NAME)
  @IsNotEmpty()
  userBankName: BANK_NAME;

  @ApiProperty({
    example: '636100001292'
  })
  @IsNotEmpty()
  @IsString()
  userAccountNumber: string;

  @ApiProperty({
    example: 'Minyoung Si'
  })
  @IsNotEmpty()
  @IsString()
  userAccountHolder: string;

  //step2
  @ApiProperty({
    example: 'Ho Chi Minh'
  })
  @IsNotEmpty()
  @IsString()
  userAddress: string;

  @ApiProperty({
    example: 'Binh Thanh'
  })
  @IsNotEmpty()
  @IsString()
  userDetailAddress: string;
}
