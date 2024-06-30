import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user-entity';
import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { AuthTokenModel } from '../../domain/models/auth-token-model';

@Entity(DATABASE_NAME.AUTH_TOKEN)
export class AuthTokenEntity extends BaseTimestampEntity<AuthTokenModel> {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'public_key' })
  publicKey: string;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.authTokens)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  public toModel(): AuthTokenModel {
    return AuthTokenModel.createInstance(this);
  }
}
