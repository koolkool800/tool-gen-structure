import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { ArtworkFileModel } from '../../domain/models';
import { ArtworkEntity } from './artwork-entity';
import { ARTWORK_FILE_TYPE } from '../../domain/enum/artwork-file-enum';
import { FileEntity } from 'src/modules/files/database/entities';

@Entity(DATABASE_NAME.ARTWORK_FILE)
export class ArtworkFileEntity extends BaseTimestampEntity<ArtworkFileModel> {
  @PrimaryColumn({ name: 'id' }) // file Id
  id: number;

  @OneToOne(() => FileEntity, (file) => file.id)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  file: FileEntity;

  @Column({ name: 'type' })
  type: ARTWORK_FILE_TYPE;

  @Column({ name: 'url' })
  url: string;

  @Column({ name: 'artwork_id' })
  artworkId: number;
  @ManyToOne(() => ArtworkEntity, (artwork) => artwork.artworkFiles)
  @JoinColumn({ name: 'artwork_id', referencedColumnName: 'id' })
  artwork: ArtworkEntity;

  public toModel(): ArtworkFileModel {
    return ArtworkFileModel.createInstance(this);
  }
}
