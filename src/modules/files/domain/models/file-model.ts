import { BaseModel } from 'src/common/models';
import { FileEntity } from '../../database/entities';

export class FileModel extends BaseModel<FileEntity> {
  constructor(fileEntity?: FileEntity) {
    if (!fileEntity) {
      return;
    }
    super();
  }

  public static createInstance(fileEntity: FileEntity): FileModel {
    return new FileModel(fileEntity);
  }

  public toEntity(): FileEntity {
    const fileEntity: FileEntity = new FileEntity();

    return fileEntity;
  }
}
