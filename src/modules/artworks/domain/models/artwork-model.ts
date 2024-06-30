import { BaseModel } from 'src/common/models';
import { ArtworkEntity } from '../../database/entities';

export class ArtworkModel extends BaseModel<ArtworkEntity> {
  constructor(artworkEntity?: ArtworkEntity) {
    if (!artworkEntity) {
      return;
    }
    super();
  }

  public static createInstance(artworkEntity: ArtworkEntity): ArtworkModel {
    return new ArtworkModel(artworkEntity);
  }

  public toEntity(): ArtworkEntity {
    const artworkEntity: ArtworkEntity = new ArtworkEntity();

    return artworkEntity;
  }
}
