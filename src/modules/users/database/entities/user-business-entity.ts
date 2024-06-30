import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserBusinessModel } from '../../domain/models';

@Entity(DATABASE_NAME.BUSINESS)
export class UserBusinessEntity extends BaseTimestampEntity<UserBusinessModel> {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'phone' })
  public phone: string;

  @Column({ name: 'person_in_charge_name' })
  public personInChargeName: string;

  @Column({ name: 'person_in_charge_phone' })
  public personInChargePhone: string;

  @Column({ name: 'company_representative_name_kor' })
  public companyRepresentativeNameKor: string;

  @Column({ name: 'company_representative_name_eng' })
  public companyRepresentativeNameEng: string;

  @Column({ name: 'company_representative_phone' })
  public companyRepresentativePhone: string;

  @Column({ name: 'authorized_person_name_eng' })
  public authorizedPersonNameEng: string;

  @Column({ name: 'authorized_person_name_kor' })
  public authorizedPersonNameKor: string;

  @Column({ name: 'authorized_person_phone' })
  public authorizedPersonPhone: string;

  public toModel(): UserBusinessModel {
    return UserBusinessModel.toModel(this);
  }
}
