import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { AdditionalArtworkModel } from '../../domain/models';
import { ArtworkEntity } from './artwork-entity';

@Entity(DATABASE_NAME.ADDITIONAL_ARTWORK)
export class AdditionalArtworkEntity extends BaseTimestampEntity<AdditionalArtworkModel> {
  @PrimaryColumn({ name: 'id' })
  id: number;

  @OneToOne(() => ArtworkEntity, (artwork) => artwork.additionalArtwork)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  artwork: ArtworkEntity;

  @Column({ name: 'has_show_title' })
  hasShowTitle: boolean;

  @Column({ name: 'has_show_size' })
  hasShowSize: boolean;

  @Column({ name: 'has_show_price' })
  hasShowPrice: boolean;

  @Column({ name: 'has_show_production_year' })
  hasShowProductionYear: boolean;

  @Column({ name: 'has_show_material_detail' })
  hasShowMaterialDetail: boolean;

  @Column({ name: 'has_show_other_info' })
  hasShowOtherInfo: boolean;

  public toModel(): AdditionalArtworkModel {
    return AdditionalArtworkModel.createInstance(this);
  }
}
