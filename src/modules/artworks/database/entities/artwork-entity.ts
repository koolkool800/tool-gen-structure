import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import {
  BOUGHT_PLACE,
  HANDOVER_METHOD,
  MATERIAL_KIND,
  PROOF_TYPE,
  SALE_TYPE,
  STATUS
} from '../../domain/enum';
import { ArtworkModel } from '../../domain/models';
import { ArtworkFileEntity } from './artwork-file-entity';
import { AdditionalArtworkEntity } from './additional-artwork-entity';
import { HandoverByYourselfEntity } from './handover-by-yourself-entity';
import { HandoverByDeliveryPartnerEntity } from './handover-by-partner-entity';
import { UserEntity } from 'src/modules/users/database/entities';
import { ArtistEntity } from 'src/modules/artist/database/entities';

@Entity(DATABASE_NAME.ARTWORK)
export class ArtworkEntity extends BaseTimestampEntity<ArtworkModel> {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'height' })
  height: number;

  @Column({ name: 'width' })
  width: number;

  @Column({ name: 'depth' })
  depth: number;

  @Column({ name: 'production_year' })
  productionYear: number;

  @Column({ name: 'sale_type' })
  saleType: SALE_TYPE;

  @Column({ name: 'views_count' })
  viewsCount: number;

  @Column({ name: 'status' })
  status: STATUS;

  @Column({ name: 'material_kind' })
  materialKind: MATERIAL_KIND;

  @Column({ name: 'material_detail' })
  materialDetail: string;

  @Column({ name: 'bought_place' })
  boughtPlace: BOUGHT_PLACE;

  @Column({ type: 'json', name: 'proof_type' })
  proofType: PROOF_TYPE[];

  @Column({ name: 'other_info' })
  otherInfo: string;

  @Column({ name: 'target_sell_price' })
  targetSellPrice: number;

  @Column({ name: 'min_sell_price' })
  minSellPrice: number;

  @Column({ name: 'handover_method' })
  handoverMethod: HANDOVER_METHOD;

  // -------------------------------------- Relations --------------------------------------

  @Column({ name: 'user_id' })
  userId: number;
  @ManyToOne(() => UserEntity, (user) => user.artworks) // onDelete cascade
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

  @OneToMany(() => ArtworkFileEntity, (artworkFile) => artworkFile.artwork)
  artworkFiles?: ArtworkFileEntity[];

  @OneToOne(() => AdditionalArtworkEntity, (additionalArtwork) => additionalArtwork.artwork)
  additionalArtwork?: AdditionalArtworkEntity;

  @OneToOne(() => HandoverByYourselfEntity, (handoverByYourself) => handoverByYourself.artwork)
  handoverByYourself?: HandoverByYourselfEntity;

  @OneToOne(
    () => HandoverByDeliveryPartnerEntity,
    (handoverByDeliveryPartner) => handoverByDeliveryPartner.artwork
  )
  handoverByDeliveryPartner?: HandoverByDeliveryPartnerEntity;

  @Column({ name: 'artist_id', nullable: true })
  artistId: number;
  @ManyToOne(() => ArtistEntity, (artist) => artist.artworks)
  @JoinColumn({ name: 'artist_id', referencedColumnName: 'id' })
  artist: ArtistEntity;

  public toModel(): ArtworkModel {
    return ArtworkModel.createInstance(this);
  }
}
