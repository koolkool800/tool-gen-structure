import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common-module';
import { CreateArtworkUseCase, GetArtworkUseCase } from './domain/use-case';

@Module({
  imports: [CommonModule],
  controllers: [],
  providers: [CreateArtworkUseCase, GetArtworkUseCase],
  exports: []
})
export class ArtworkModule {}
