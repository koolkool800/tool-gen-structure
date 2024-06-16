import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';
import { configuration } from '@app/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = configuration().authService.http_port;
  const tcp_port = configuration().authService.tcp_port;

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configuration().authService.tcp_port,
    },
  });

  app.useLogger(app.get(Logger));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  console.log(`Listening authservice on tcp port ${tcp_port}`);
  console.log(`Listening authservice on http port ${port}`);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
