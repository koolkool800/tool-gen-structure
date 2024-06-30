import { BaseModel } from 'src/common/models';
import { UserEntity } from '../../database/entities';
import { RANK, USER_STATUS } from '../enum';

export class UserModel extends BaseModel<UserEntity> {
  private id: number;
  private email: string;
  private hashedPassword: string;
  private phoneNumber: string;
  private name: string;
  private currentDeviceToken: string;
  private rank: RANK;
  private status: USER_STATUS;
  private lastLogin: Date;
  private loginTimes: number;
  private joinDate: Date;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  public getId(): number {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
    return this;
  }

  public getPassword(): string {
    return this.hashedPassword;
  }

  public setPassword(password: string) {
    this.hashedPassword = this.hashPassword(password);
    return this;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
    return this;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
    return this;
  }

  public getCurrentDeviceToken(): string {
    return this.currentDeviceToken;
  }

  public setCurrentDeviceToken(currentDeviceToken: string) {
    this.currentDeviceToken = currentDeviceToken;
    return this;
  }

  public getRank(): RANK {
    return this.rank;
  }

  public setRank(rank: RANK) {
    this.rank = rank;
    return this;
  }

  public getStatus(): USER_STATUS {
    return this.status;
  }

  public setStatus(status: USER_STATUS) {
    this.status = status;
    return this;
  }

  public getLastLogin(): Date {
    return this.lastLogin;
  }

  public setLastLogin(lastLogin: Date) {
    this.lastLogin = lastLogin;
    return this;
  }

  public getLoginTimes(): number {
    return this.loginTimes;
  }

  public setLoginTimes(loginTimes: number) {
    this.loginTimes = loginTimes;
    return this;
  }

  public getJoinDate(): Date {
    return this.joinDate;
  }

  public setJoinDate(joinDate: Date) {
    this.joinDate = joinDate;
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

  static createUserModel(input: {
    email: string;
    password: string;
    phoneNumber: string;
    name: string;
  }) {
    return new UserModel()
      .setEmail(input.email)
      .setPassword(input.password)
      .setPhoneNumber(input.phoneNumber)
      .setName(input.name)
      .setCurrentDeviceToken(null)
      .setRank(null)
      .setLastLogin(null)
      .setLoginTimes(0)
      .setJoinDate(new Date())
      .setLoginTimes(0)
      .setStatus(USER_STATUS.ACTIVE)
      .setCreatedAt(new Date())
      .setUpdatedAt(new Date());
  }

  constructor(usersEntity?: UserEntity) {
    super();
    if (!usersEntity) {
      return;
    }

    this.id = usersEntity.id;
    this.email = usersEntity.email;
    this.hashedPassword = usersEntity.password;
    this.phoneNumber = usersEntity.phoneNumber;
    this.name = usersEntity.name;
    this.currentDeviceToken = usersEntity.currentDeviceToken;
    this.rank = usersEntity.rank;
    this.status = usersEntity.status;
    this.lastLogin = usersEntity.lastLogin;
    this.loginTimes = usersEntity.loginTimes;
    this.joinDate = usersEntity.joinDate;
    this.createdAt = usersEntity.createdAt;
    this.updatedAt = usersEntity.updatedAt;
  }

  public static createInstance(usersEntity: UserEntity): UserModel {
    return new UserModel(usersEntity);
  }

  public toEntity(): UserEntity {
    const usersEntity: UserEntity = new UserEntity();
    usersEntity.id = this.id;
    usersEntity.email = this.email;
    usersEntity.password = this.hashedPassword;
    usersEntity.phoneNumber = this.phoneNumber;
    usersEntity.name = this.name;
    usersEntity.currentDeviceToken = this.currentDeviceToken;
    usersEntity.rank = this.rank;
    usersEntity.status = this.status;
    usersEntity.lastLogin = this.lastLogin;
    usersEntity.loginTimes = this.loginTimes;
    usersEntity.joinDate = this.joinDate;
    usersEntity.createdAt = this.createdAt;
    usersEntity.updatedAt = this.updatedAt;

    return usersEntity;
  }

  private hashPassword(password: string): string {
    return password;
  }
}
