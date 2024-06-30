import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OTP_TYPE } from '../../domain/enum';
import { OtpModel } from '../../domain/models';

@Entity(DATABASE_NAME.OTP)
export class OtpEntity extends BaseTimestampEntity<OtpModel> {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'otp' })
  otp: string;

  @Column({ name: 'type' })
  type: OTP_TYPE;

  @Column({ name: 'is_revoked' })
  isRevoked: boolean;

  @Column({ name: 'expires_at' })
  expiresAt: Date;

  public toModel(): OtpModel {
    return OtpModel.toModel(this);
  }
}
