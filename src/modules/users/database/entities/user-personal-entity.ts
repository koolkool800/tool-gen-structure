import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user-entity';
import { BANK_NAME, SNS_TYPE } from '../../domain/enum';
import { UserPersonalModel } from '../../domain/models';

@Entity(DATABASE_NAME.PERSONAL)
export class UserPersonalEntity extends BaseTimestampEntity<UserPersonalModel> {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'bank_name' })
  bankName: BANK_NAME;

  @Column({ name: 'account_name' })
  accountName: string;

  @Column({ name: 'account_holder' })
  accountHolder: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'detail_address' })
  detailAddress: string;

  @Column({ name: 'sns_type' })
  snsType: SNS_TYPE;

  @OneToOne(() => UserEntity, (user) => user.userPersonal)
  @JoinColumn({ name: 'id' })
  user: UserEntity;

  public toModel(): UserPersonalModel {
    return UserPersonalModel.createInstance(this);
  }
}
