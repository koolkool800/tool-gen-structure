import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HandoverByYourselfModel } from '../../domain/models';
import { ArtworkEntity } from './artwork-entity';
import { WarehouseEntity } from './warehouse-entity';

@Entity(DATABASE_NAME.HANDOVER_BY_YOURSELF)
export class HandoverByYourselfEntity extends BaseTimestampEntity<HandoverByYourselfModel> {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'date' })
  date: Date;

  @Column({ name: 'time_frame_to' })
  timeFrameTo: Date;

  @Column({ name: 'time_frame_from' })
  timeFrameFrom: Date;

  @Column({ name: 'artwork_id' })
  artworkId: number;
  @OneToOne(() => ArtworkEntity, (artwork) => artwork.handoverByYourself)
  @JoinColumn({ name: 'artwork_id', referencedColumnName: 'id' })
  artwork: ArtworkEntity;

  @Column({ name: 'warehouse_id' })
  warehouseId: number;
  @ManyToOne(() => WarehouseEntity, (warehouse) => warehouse.handoverByYourself)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'id' })
  warehouse: WarehouseEntity;

  public toModel(): HandoverByYourselfModel {
    return HandoverByYourselfModel.createInstance(this);
  }
}
