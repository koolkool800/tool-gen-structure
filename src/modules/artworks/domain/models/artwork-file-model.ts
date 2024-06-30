import { BaseModel } from 'src/common/models';
import { ArtworkFileEntity } from '../../database/entities';

export class ArtworkFileModel extends BaseModel<ArtworkFileEntity> {
  constructor(artworkFileEntity?: ArtworkFileEntity) {
    if (!artworkFileEntity) {
      return;
    }
    super();
  }

  public static createInstance(artworkFileEntity: ArtworkFileEntity): ArtworkFileModel {
    return new ArtworkFileModel(artworkFileEntity);
  }

  public toEntity(): ArtworkFileEntity {
    const artworkFileEntity: ArtworkFileEntity = new ArtworkFileEntity();

    return artworkFileEntity;
  }
}
