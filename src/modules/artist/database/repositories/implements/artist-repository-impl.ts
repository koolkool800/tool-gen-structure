import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtistRepositoryAbstract } from '../abstracts';
import { ArtistEntity } from '../../entities';
import { ArtistModel } from 'src/modules/artist/domain/models';

export class ArtistRepositoryImpl extends ArtistRepositoryAbstract {
  constructor(
    @InjectRepository(ArtistEntity)
    private readonly artistRepository: Repository<ArtistEntity>
  ) {
    super();
  }

  async create(data: ArtistModel): Promise<ArtistModel> {
    const entity = await this.artistRepository.save(data.toEntity());
    return entity.toModel();
  }
}
