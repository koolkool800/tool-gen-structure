import { BaseModel } from 'src/common/models';
import { UserBusinessEntity } from '../../database/entities';

export class UserBusinessModel extends BaseModel<UserBusinessEntity> {
  private id: number;
  private phone: string;
  private personInChargeName: string;
  private personInChargePhone: string;
  private companyRepresentativeNameKor: string;
  private companyRepresentativeNameEng: string;
  private companyRepresentativePhone: string;
  private authorizedPersonNameEng: string;
  private authorizedPersonNameKor: string;
  private authorizedPersonPhone: string;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  constructor(data?: UserBusinessEntity) {
    super();

    this.id = data.id;
    this.phone = data.phone;
    this.personInChargeName = data.personInChargeName;
    this.personInChargePhone = data.personInChargePhone;
    this.companyRepresentativeNameKor = data.companyRepresentativeNameKor;
    this.companyRepresentativeNameEng = data.companyRepresentativeNameEng;
    this.companyRepresentativePhone = data.companyRepresentativePhone;
    this.authorizedPersonNameEng = data.authorizedPersonNameEng;
    this.authorizedPersonNameKor = data.authorizedPersonNameKor;
    this.authorizedPersonPhone = data.authorizedPersonPhone;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
  }

  static toModel(data: UserBusinessEntity): UserBusinessModel {
    return new UserBusinessModel(data);
  }

  public toEntity(): UserBusinessEntity {
    const entity = new UserBusinessEntity();
    entity.id = this.getId();
    entity.phone = this.getPhone();
    entity.personInChargeName = this.getPersonInChargeName();
    entity.personInChargePhone = this.getPersonInChargePhone();
    entity.companyRepresentativeNameKor = this.getCompanyRepresentativeNameKor();
    entity.companyRepresentativeNameEng = this.getCompanyRepresentativeNameEng();
    entity.companyRepresentativePhone = this.getCompanyRepresentativePhone();
    entity.authorizedPersonNameEng = this.getAuthorizedPersonNameEng();
    entity.authorizedPersonNameKor = this.getAuthorizedPersonNameKor();
    entity.authorizedPersonPhone = this.getAuthorizedPersonPhone();
    entity.createdAt = this.getCreatedAt();
    entity.updatedAt = this.getUpdatedAt();
    entity.deletedAt = this.getDeletedAt();
    return entity;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
    return this;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string) {
    this.phone = phone;
    return this;
  }

  public getPersonInChargeName(): string {
    return this.personInChargeName;
  }

  public setPersonInChargeName(personInChargeName: string) {
    this.personInChargeName = personInChargeName;
    return this;
  }

  public getPersonInChargePhone(): string {
    return this.personInChargePhone;
  }

  public setPersonInChargePhone(personInChargePhone: string) {
    this.personInChargePhone = personInChargePhone;
    return this;
  }

  public getCompanyRepresentativeNameKor(): string {
    return this.companyRepresentativeNameKor;
  }

  public setCompanyRepresentativeNameKor(companyRepresentativeNameKor: string) {
    this.companyRepresentativeNameKor = companyRepresentativeNameKor;
    return this;
  }

  public getCompanyRepresentativeNameEng(): string {
    return this.companyRepresentativeNameEng;
  }

  public setCompanyRepresentativeNameEng(companyRepresentativeNameEng: string) {
    this.companyRepresentativeNameEng = companyRepresentativeNameEng;
    return this;
  }

  public getCompanyRepresentativePhone(): string {
    return this.companyRepresentativePhone;
  }

  public setCompanyRepresentativePhone(companyRepresentativePhone: string) {
    this.companyRepresentativePhone = companyRepresentativePhone;
    return this;
  }

  public getAuthorizedPersonNameEng(): string {
    return this.authorizedPersonNameEng;
  }

  public setAuthorizedPersonNameEng(authorizedPersonNameEng: string) {
    this.authorizedPersonNameEng = authorizedPersonNameEng;
    return this;
  }

  public getAuthorizedPersonNameKor(): string {
    return this.authorizedPersonNameKor;
  }

  public setAuthorizedPersonNameKor(authorizedPersonNameKor: string) {
    this.authorizedPersonNameKor = authorizedPersonNameKor;
    return this;
  }

  public getAuthorizedPersonPhone(): string {
    return this.authorizedPersonPhone;
  }

  public setAuthorizedPersonPhone(authorizedPersonPhone: string) {
    this.authorizedPersonPhone = authorizedPersonPhone;
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
