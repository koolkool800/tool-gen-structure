import { Injectable } from '@nestjs/common';

@Injectable()
export class TestServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
