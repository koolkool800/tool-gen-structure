import { Module } from '@nestjs/common';
import { CommonModule, configuration } from '@app/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CommonModule,
    JwtModule.register({
      global: true,
      secret: String(configuration().jwt.secret),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

