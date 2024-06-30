import { BaseModel } from 'src/common/models';
import { UserPersonalEntity } from '../../database/entities';
import { BANK_NAME, SNS_TYPE } from '../enum';

export class UserPersonalModel extends BaseModel<UserPersonalEntity> {
  private id: number;
  private bankName: BANK_NAME;
  private accountName: string;
  private accountHolder: string;
  private address: string;
  private detailAddress: string;
  private snsType: SNS_TYPE;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
    return this;
  }

  public getBankName(): BANK_NAME {
    return this.bankName;
  }

  public setBankName(bankName: BANK_NAME) {
    this.bankName = bankName;
    return this;
  }

  public getAccountName(): string {
    return this.accountName;
  }

  public setAccountName(accountName: string) {
    this.accountName = accountName;
    return this;
  }

  public getAccountHolder(): string {
    return this.accountHolder;
  }

  public setAccountHolder(accountHolder: string) {
    this.accountHolder = accountHolder;
    return this;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string) {
    this.address = address;
    return this;
  }

  public getDetailAddress(): string {
    return this.detailAddress;
  }

  public setDetailAddress(detailAddress: string) {
    this.detailAddress = detailAddress;
    return this;
  }

  public getSnsType(): SNS_TYPE {
    return this.snsType;
  }

  public setSnsType(snsType: SNS_TYPE) {
    this.snsType = snsType;
    return this;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }

  public getDeletedAt(): Date {
    return this.deletedAt;
  }

  public setDeletedAt(deletedAt: Date) {
    this.deletedAt = deletedAt;
    return this;
  }

  static createUserPersonalModel(input: {
    userId: number;
    userBankName: BANK_NAME;
    userAccountNumber: string;
    userAccountHolder: string;
    userAddress: string;
    userDetailAddress: string;
  }) {
    return new UserPersonalModel()
      .setId(input.userId)
      .setBankName(input.userBankName)
      .setAccountName(input.userAccountNumber)
      .setAccountHolder(input.userAccountHolder)
      .setAddress(input.userAddress)
      .setDetailAddress(input.userDetailAddress)
      .setSnsType(SNS_TYPE.NORMAL)
      .setCreatedAt(new Date())
      .setUpdatedAt(new Date());
  }

  constructor(userPersonalEntity?: UserPersonalEntity) {
    super();
    if (!userPersonalEntity) {
      return;
    }
    this.id = userPersonalEntity.id;
    this.bankName = userPersonalEntity.bankName;
    this.accountName = userPersonalEntity.accountName;
    this.accountHolder = userPersonalEntity.accountHolder;
    this.address = userPersonalEntity.address;
    this.detailAddress = userPersonalEntity.detailAddress;
    this.snsType = userPersonalEntity.snsType;
  }

  public static createInstance(userPersonalEntity: UserPersonalEntity): UserPersonalModel {
    return new UserPersonalModel(userPersonalEntity);
  }

  public toEntity(): UserPersonalEntity {
    const entity = new UserPersonalEntity();

    entity.id = this.id;
    entity.bankName = this.bankName;
    entity.accountName = this.accountName;
    entity.accountHolder = this.accountHolder;
    entity.address = this.address;
    entity.detailAddress = this.detailAddress;
    entity.snsType = this.snsType;

    return entity;
  }
}
