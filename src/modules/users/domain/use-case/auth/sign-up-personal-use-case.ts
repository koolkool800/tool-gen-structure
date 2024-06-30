import { Injectable } from '@nestjs/common';
import { UserRepositoryAbstract } from 'src/modules/users/database/repositories/abstracts/user-repository-abstract';
import { UserModel, UserPersonalModel } from '../../models';
import { BANK_NAME } from '../../enum';
import { UserPersonalRepositoryAbstract } from 'src/modules/users/database/repositories';
import { GenAccessAndRefreshTokenUseCase } from './gen-access-refresh-token-use-case';

interface IInput {
  email: string;
  password: string;

  //fake step
  phoneNumber: string;
  name: string;

  //step 1
  userBankName: BANK_NAME;
  userAccountNumber: string;
  userAccountHolder: string;

  //step2
  userAddress: string;
  userDetailAddress: string;
}

interface IOutput {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class SignUpPersonalUseCase {
  constructor(
    private userRepositoryAbstract: UserRepositoryAbstract,
    private genAccessAndRefreshTokenUseCase: GenAccessAndRefreshTokenUseCase,
    private userPersonalRepositoryAbstract: UserPersonalRepositoryAbstract
  ) {}

  async execute(input: IInput): Promise<IOutput> {
    // TODO: verify nice api to get phone number and name
    // const { phoneNumber, name } = await this.verifyPhoneNumberAndName();

    await this.checkUserExistByEmail(input);

    const newUserId = await this.createUserPersonal(input);
    const { accessToken, refreshToken } = await this.genAccessAndRefreshTokenUseCase.execute(
      newUserId
    );

    return {
      accessToken,
      refreshToken
    };
  }

  private async checkUserExistByEmail(data: { email: string }) {
    const user = await this.userRepositoryAbstract.findOneByEmail(data.email);

    if (user) {
      throw new Error('User already exists');
    }
  }

  private async createUserPersonal(input: IInput): Promise<number> {
    const userId = await this.createUser(input);
    await this.createPersonal(userId, input);
    return userId;
  }

  private async createUser(input: IInput): Promise<number> {
    const newUser = UserModel.createUserModel(input);
    const userModel = await this.userRepositoryAbstract.create(newUser);
    return userModel.getId();
  }

  private async createPersonal(userId: number, input: IInput) {
    const userPersonal = UserPersonalModel.createUserPersonalModel({
      userId,
      ...input
    });
    await this.userPersonalRepositoryAbstract.create(userPersonal);
  }
}
