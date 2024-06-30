import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PartnerModel } from '../../domain/models';
import { HandoverByDeliveryPartnerEntity } from './handover-by-partner-entity';

@Entity(DATABASE_NAME.PARTNER)
export class PartnerEntity extends BaseTimestampEntity<PartnerModel> {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'available_time_from' })
  availabelTimeFrom: Date;

  @Column({ name: 'available_time_to' })
  availabelTimeTo: Date;

  @Column({ name: 'shipping_area' })
  shippingArea: string;

  @OneToMany(
    () => HandoverByDeliveryPartnerEntity,
    (handoverByDeliveryPartner) => handoverByDeliveryPartner.partner
  )
  handoverByDeliveryPartner?: HandoverByDeliveryPartnerEntity[];

  public toModel(): PartnerModel {
    return PartnerModel.createInstance(this);
  }
}
