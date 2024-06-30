import { BaseModel } from 'src/common/models';
import { v4 as uuidv4 } from 'uuid';
import { AuthTokenEntity } from '../../database/entities/auth-token-entity';
import { UserModel } from './user-model';
import * as crypto from 'crypto';

export class AuthTokenModel extends BaseModel<AuthTokenEntity> {
  private id: string;
  private userId: number;
  private publicKey: string;
  private user: UserModel;
  private createdAt: Date;
  private updateAt: Date;
  private deleteAt: Date;

  public getId(): string {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
    return this;
  }

  public getUserId(): number {
    return this.userId;
  }

  public setUserId(userId: number) {
    this.userId = userId;
    return this;
  }

  public getPublicKey(): string {
    return this.publicKey;
  }

  public setPublicKey(publicKey: string) {
    this.publicKey = publicKey;
    return this;
  }

  public getUser(): UserModel {
    return this.user;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  public getUpdateAt(): Date {
    return this.updateAt;
  }

  public setUpdateAt(updateAt: Date) {
    this.updateAt = updateAt;
    return this;
  }

  public getDeleteAt(): Date {
    return this.deleteAt;
  }

  public setDeleteAt(deleteAt: Date) {
    this.deleteAt = deleteAt;
    return this;
  }

  public static genKeyPair(): { publicKey: string; privateKey: string } {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      }
    });
    return {
      privateKey,
      publicKey
    };
  }

  constructor(authTokenEntity?: AuthTokenEntity) {
    super();
    if (!authTokenEntity) {
      return;
    }

    this.id = authTokenEntity.id;
    this.userId = authTokenEntity.userId;
    this.publicKey = authTokenEntity.publicKey;
    // this.user = authTokenEntity.user.toModel();
  }

  static createAuthTokenModelForCreateEntity(data: { userId: number; publicKey: string }) {
    return new AuthTokenModel()
      .setId(uuidv4())
      .setPublicKey(data.publicKey)
      .setUserId(data.userId)
      .setCreatedAt(new Date())
      .setUpdateAt(new Date())
      .setDeleteAt(null);
  }

  public static createInstance(authTokenEntity: AuthTokenEntity): AuthTokenModel {
    return new AuthTokenModel(authTokenEntity);
  }

  public toEntity(): AuthTokenEntity {
    const entity = new AuthTokenEntity();

    entity.id = this.getId();
    entity.userId = this.getUserId();
    entity.publicKey = this.getPublicKey();
    entity.createdAt = this.getCreatedAt();
    entity.updatedAt = this.getUpdateAt();
    entity.deletedAt = this.getDeleteAt();

    return entity;
  }
}
