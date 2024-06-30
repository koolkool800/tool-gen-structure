import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config, { REDIS_HOST, REDIS_PORT } from 'src/config';
import { DatabaseModule } from './database/database-module';
import { DataSourceOptions } from 'typeorm';
import { DatabaseService } from './database/services';
import { JwtModule } from '@nestjs/jwt';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-yet';
import type { RedisClientOptions } from 'redis';

import {
  AdditionalArtworkEntity,
  ArtworkEntity,
  ArtworkFileEntity,
  HandoverByDeliveryPartnerEntity,
  HandoverByYourselfEntity,
  PartnerEntity,
  WarehouseEntity
} from '../artworks/database/entities';
import {
  AuthTokenEntity,
  OtpEntity,
  UserBusinessEntity,
  UserEntity,
  UserPersonalEntity
} from '../users/database/entities';
import { EmailService } from './email/email-service';
import { FileEntity } from '../files/database/entities';
import { ArtistEntity } from '../artist/database/entities';

const typeormEntities = TypeOrmModule.forFeature([
  UserEntity,
  AuthTokenEntity,
  UserPersonalEntity,
  ArtworkEntity,
  ArtworkFileEntity,
  AdditionalArtworkEntity,
  HandoverByDeliveryPartnerEntity,
  HandoverByYourselfEntity,
  PartnerEntity,
  WarehouseEntity,
  UserBusinessEntity,
  OtpEntity,
  FileEntity,
  ArtistEntity
]);

@Module({
  controllers: [],
  providers: [EmailService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config
    }),
    TypeOrmModule.forRootAsync({
      imports: [DatabaseModule],
      inject: [DatabaseService],
      useFactory: (databaseService: DatabaseService) => databaseService.createOptions(),
      async dataSourceFactory(options?: DataSourceOptions) {
        return DatabaseService.addTransaction(options);
      }
    }),
    JwtModule.register({
      global: true,
      signOptions: {
        algorithm: 'RS256'
      }
    }),
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore.redisStore({
          socket: {
            host: REDIS_HOST,
            port: Number(REDIS_PORT)
          }
        })
      })
    }),
    typeormEntities
  ],
  exports: [typeormEntities, EmailService]
})
export class CommonModule {}
