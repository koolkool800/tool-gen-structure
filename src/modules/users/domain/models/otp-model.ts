import { BaseModel } from 'src/common/models';
import { OtpEntity } from '../../database/entities/otp-entity';
import { OTP_TYPE } from '../enum';
import { v4 as uuidv4 } from 'uuid';

export class OtpModel extends BaseModel<OtpEntity> {
  private id: string;
  private email: string;
  private otp: string;
  private type: OTP_TYPE;
  private isRevoked: boolean;
  private expiresAt: Date;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  constructor(data?: OtpEntity) {
    super();
    if (!data) {
      return;
    }

    this.setId(data.id);
    this.setEmail(data.email);
    this.setOtp(data.otp);
    this.setType(data.type);
    this.setIsRevoked(data.isRevoked);
    this.setExpiresAt(data.expiresAt);
    this.setCreatedAt(data.createdAt);
    this.setUpdatedAt(data.updatedAt);
    this.setDeletedAt(data.deletedAt);
  }

  static toModel(data: OtpEntity): OtpModel {
    return new OtpModel(data);
  }

  public toEntity(): OtpEntity {
    const entity = new OtpEntity();
    entity.id = this.getId();
    entity.email = this.getEmail();
    entity.otp = this.getOtp();
    entity.type = this.getType();
    entity.isRevoked = this.getIsRevoked();
    entity.expiresAt = this.getExpiresAt();
    entity.createdAt = this.getCreatedAt();
    entity.updatedAt = this.getUpdatedAt();
    entity.deletedAt = this.getDeletedAt();

    return entity;
  }

  static createNewModelForCreateEntity(data: {
    email: string;
    type: OTP_TYPE;
    otp: string;
    expiresAt: Date;
  }) {
    return new OtpModel()
      .setId(uuidv4())
      .setEmail(data.email)
      .setType(data.type)
      .setIsRevoked(false)
      .setExpiresAt(new Date())
      .setOtp(data.otp)
      .setCreatedAt(new Date())
      .setUpdatedAt(new Date())
      .setDeletedAt(null);
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
    return this;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
    return this;
  }

  public getOtp(): string {
    return this.otp;
  }

  public setOtp(otp: string) {
    this.otp = otp;
    return this;
  }

  public getType(): OTP_TYPE {
    return this.type;
  }

  public setType(type: OTP_TYPE) {
    this.type = type;
    return this;
  }

  public getIsRevoked(): boolean {
    return this.isRevoked;
  }

  public setIsRevoked(isRevoked: boolean) {
    this.isRevoked = isRevoked;
    return this;
  }

  public getExpiresAt(): Date {
    return this.expiresAt;
  }

  public setExpiresAt(expiresAt: Date) {
    this.expiresAt = expiresAt;
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
}
