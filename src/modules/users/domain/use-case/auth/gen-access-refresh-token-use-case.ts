import { Injectable } from '@nestjs/common';
import { AuthTokenModel } from '../../models/auth-token-model';
import { AuthTokenRepositoryAbstract } from 'src/modules/users/database/repositories';
import { UserModel } from '../../models';
import { JwtService } from '@nestjs/jwt';
import { JWT_LIFE_TIME_ACCESS, JWT_LIFE_TIME_REFRESH } from 'src/config';

interface IOutput {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class GenAccessAndRefreshTokenUseCase {
  constructor(
    private authTokenRepositoryAbstract: AuthTokenRepositoryAbstract,
    private jwtService: JwtService
  ) {}

  public async execute(userId: number): Promise<IOutput> {
    const keyPair = AuthTokenModel.genKeyPair();

    const insertAuthTokenModel = AuthTokenModel.createAuthTokenModelForCreateEntity({
      publicKey: keyPair.publicKey,
      userId
    });

    const authTokenModel = await this.authTokenRepositoryAbstract.create(insertAuthTokenModel);

    const tokenPair = this.genToken({
      userId,
      authTokenId: authTokenModel.getId(),
      privateKey: keyPair.privateKey
    });

    return tokenPair;
  }

  private genToken(data: { userId: number; authTokenId: string; privateKey: string }): {
    accessToken: string;
    refreshToken: string;
  } {
    const payload = {
      userId: data.userId,
      authTokenId: data.authTokenId
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: data.privateKey,
      expiresIn: JWT_LIFE_TIME_ACCESS
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: data.privateKey,
      expiresIn: JWT_LIFE_TIME_REFRESH
    });

    return {
      accessToken,
      refreshToken
    };
  }
}
