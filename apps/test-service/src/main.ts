import { NestFactory } from '@nestjs/core';
import { TestServiceModule } from './test-service.module';

async function bootstrap() {
  const app = await NestFactory.create(TestServiceModule);
  await app.listen(3000);
}
bootstrap();
