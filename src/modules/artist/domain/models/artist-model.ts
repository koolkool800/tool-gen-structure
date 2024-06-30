import { BaseModel } from 'src/common/models';
import { ArtistEntity } from '../../database/entities';

export class ArtistModel extends BaseModel<ArtistEntity> {
  constructor(artistEntity?: ArtistEntity) {
    if (!artistEntity) {
      return;
    }
    super();
  }

  public static createInstance(ArtistEntity: ArtistEntity): ArtistModel {
    return new ArtistModel(ArtistEntity);
  }

  public toEntity(): ArtistEntity {
    const artistEntity: ArtistEntity = new ArtistEntity();

    return artistEntity;
  }
}
