import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ArtistModel } from '../../domain/models';
import { ArtworkEntity } from 'src/modules/artworks/database/entities';

@Entity(DATABASE_NAME.ARTIST)
export class ArtistEntity extends BaseTimestampEntity<ArtistModel> {
  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string; // index

  @Column({ name: 'avatar' })
  avatar: string;

  @Column({ name: 'nationality' })
  nationality: string;

  @Column({ name: 'born_year' })
  bornYear: number;

  @Column({ name: 'died_year', nullable: true })
  diedYear: number;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'rank' })
  rank: string;

  @OneToMany(() => ArtworkEntity, (artwork) => artwork.artist)
  artworks?: ArtworkEntity[];

  public toModel(): ArtistModel {
    return ArtistModel.createInstance(this);
  }
}
