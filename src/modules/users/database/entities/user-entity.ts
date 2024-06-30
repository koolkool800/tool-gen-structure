import { BaseTimestampEntity, DATABASE_NAME, MapField } from 'src/common/entities';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserPersonalEntity } from './user-personal-entity';
import { UserModel } from '../../domain/models';
import { RANK, USER_STATUS } from '../../domain/enum';
import { AuthTokenEntity } from './auth-token-entity';
import { ArtworkEntity } from 'src/modules/artworks/database/entities';

@Entity(DATABASE_NAME.USER)
export class UserEntity extends BaseTimestampEntity<UserModel> {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'current_device_token' })
  currentDeviceToken: string;

  @Column({ name: 'rank' })
  rank: RANK;

  @Column({ name: 'status' })
  status: USER_STATUS;

  @Column({ name: 'last_login' })
  lastLogin: Date;

  @Column({ name: 'login_times' })
  loginTimes: number;

  @Column({ name: 'join_date' })
  joinDate: Date;

  // Relations
  @OneToOne(() => UserPersonalEntity)
  userPersonal?: UserPersonalEntity;

  @OneToMany(() => AuthTokenEntity, (authToken) => authToken.user)
  authTokens?: AuthTokenEntity[];

  @OneToMany(() => ArtworkEntity, (artwork) => artwork.user)
  artworks?: ArtworkEntity[];

  public toModel(): UserModel {
    return UserModel.createInstance(this);
  }
}
