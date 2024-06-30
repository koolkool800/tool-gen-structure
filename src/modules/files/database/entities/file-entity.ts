import { BaseTimestampEntity, DATABASE_NAME } from 'src/common/entities';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { FileModel } from '../../domain/models';

@Entity(DATABASE_NAME.FILE)
export class FileEntity extends BaseTimestampEntity<FileModel> {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'url' })
  url: string;

  @Column({ name: 'mime_type' })
  mimeType: string;

  @Column({ name: 'name' })
  name: string;

  public toModel(): FileModel {
    return FileModel.createInstance(this);
  }
}
