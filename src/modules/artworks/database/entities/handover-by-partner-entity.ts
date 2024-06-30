import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HandoverByDeliveryPartnerModel } from '../../domain/models';
import { ArtworkEntity } from './artwork-entity';
import { PartnerEntity } from './partner-entity';

@Entity(DATABASE_NAME.HANDOVER_BY_DELIVERY_PARTNER)
export class HandoverByDeliveryPartnerEntity extends BaseTimestampEntity<HandoverByDeliveryPartnerModel> {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'expected_date' })
  expectedDate: Date;

  @Column({ name: 'artwork_id' })
  artworkId: number;
  @OneToOne(() => ArtworkEntity, (artwork) => artwork.handoverByDeliveryPartner)
  @JoinColumn({ name: 'artwork_id', referencedColumnName: 'id' })
  artwork: ArtworkEntity;

  @Column({ name: 'partner_id' })
  partnerId: number;
  @ManyToOne(() => PartnerEntity, (partner) => partner.handoverByDeliveryPartner)
  @JoinColumn({ name: 'partner_id', referencedColumnName: 'id' })
  partner: PartnerEntity;

  public toModel(): HandoverByDeliveryPartnerModel {
    return HandoverByDeliveryPartnerModel.createInstance(this);
  }
}
