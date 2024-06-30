import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WarehouseModel } from '../../domain/models';
import { HandoverByYourselfEntity } from './handover-by-yourself-entity';

@Entity(DATABASE_NAME.WAREHOUSE)
export class WarehouseEntity extends BaseTimestampEntity<WarehouseModel> {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => HandoverByYourselfEntity, (handoverByYourself) => handoverByYourself.warehouse)
  handoverByYourself?: HandoverByYourselfEntity[];

  public toModel(): WarehouseModel {
    return WarehouseModel.createInstance(this);
  }
}
