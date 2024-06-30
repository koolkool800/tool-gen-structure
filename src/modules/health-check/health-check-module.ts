import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common-module';
import { HealthCheckController } from './api/http/controllers/health-check-controller';

@Module({
  imports: [CommonModule],
  controllers: [HealthCheckController],
  providers: [],
  exports: []
})
export class HealthCheckModule {}
