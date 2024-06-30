import { BaseModel } from 'src/common/models';
import { AdditionalArtworkEntity } from '../../database/entities';

export class AdditionalArtworkModel extends BaseModel<AdditionalArtworkEntity> {
  constructor(AdditionalArtworkEntity?: AdditionalArtworkEntity) {
    if (!AdditionalArtworkEntity) {
      return;
    }
    super();
  }

  public static createInstance(
    AdditionalArtworkEntity: AdditionalArtworkEntity
  ): AdditionalArtworkModel {
    return new AdditionalArtworkModel(AdditionalArtworkEntity);
  }

  public toEntity(): AdditionalArtworkEntity {
    const additionalArtworkEntity: AdditionalArtworkEntity = new AdditionalArtworkEntity();

    return additionalArtworkEntity;
  }
}
