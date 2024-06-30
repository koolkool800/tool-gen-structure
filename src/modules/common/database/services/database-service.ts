import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}

  createOptions(): TypeOrmModuleOptions {
    return {
      type: 'mariadb',
      host: this.configService.get<string>('database.host'),
      port: Number(this.configService.get<string>('database.port')),
      charset: 'utf8mb4_general_ci',
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      entities: ['dist/modules/**/entities/*.js'],
      synchronize: false,
      debug: false
    };
  }

  static addTransaction(options: DataSourceOptions) {
    if (!options) {
      throw new Error('Invalid options passed');
    }

    return addTransactionalDataSource(new DataSource(options));
  }
}
