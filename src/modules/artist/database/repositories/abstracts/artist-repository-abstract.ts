import { ArtistModel } from 'src/modules/artist/domain/models';

export abstract class ArtistRepositoryAbstract {
  abstract create(data: ArtistModel): Promise<ArtistModel>;
}
