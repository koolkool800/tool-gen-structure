import { Module } from '@nestjs/common';
import { UsersSharedService } from './domain/user-shared-service';
import { AuthController, UsersController } from './api/http/controllers';
import {
  CreateOtpUseCase,
  GenAccessAndRefreshTokenUseCase,
  GetPublicKeyUseCase,
  SendOtpForSignUpBusinessUseCase,
  SignUpBusinessUseCase,
  SignUpPersonalUseCase
} from './domain/use-case';
import {
  AuthTokenRepositoryAbstract,
  AuthTokenRepositoryImpl,
  OtpRepositoryAbstract,
  OtpRepositoryImpl,
  UserPersonalRepositoryAbstract,
  UserRepositoryAbstract,
  UserRepositoryImpl
} from './database/repositories';
import { UserPersonalRepositoryImpl } from './database/repositories/implements/user-personal-repository-impl';
import { CommonModule } from '../common/common-module';

@Module({
  imports: [CommonModule],
  controllers: [UsersController, AuthController],
  providers: [
    UsersSharedService,
    GetPublicKeyUseCase,
    GenAccessAndRefreshTokenUseCase,
    SignUpPersonalUseCase,
    SignUpBusinessUseCase,
    SendOtpForSignUpBusinessUseCase,
    CreateOtpUseCase,
    SendOtpForSignUpBusinessUseCase,

    {
      provide: UserRepositoryAbstract,
      useClass: UserRepositoryImpl
    },
    {
      provide: AuthTokenRepositoryAbstract,
      useClass: AuthTokenRepositoryImpl
    },
    {
      provide: UserPersonalRepositoryAbstract,
      useClass: UserPersonalRepositoryImpl
    },
    {
      provide: OtpRepositoryAbstract,
      useClass: OtpRepositoryImpl
    }
  ],
  exports: [UsersSharedService]
})
export class UserModule {}
