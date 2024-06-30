import { Controller, Get, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager';

@ApiTags('Health Check')
@Controller('health-check')
export class HealthCheckController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get('redis')
  async checkRedis(): Promise<string> {
    try {
      await this.cacheManager.set('health-check', 'ok', 5000);
      const value = await this.cacheManager.get('health-check');
      return `Redis is connected. Value: ${value}`;
    } catch (error) {
      return `Redis connection failed: ${error.message}`;
    }
  }
}
