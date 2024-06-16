import { Controller, Get } from '@nestjs/common';
import { TestServiceService } from './test-service.service';

@Controller()
export class TestServiceController {
  constructor(private readonly testServiceService: TestServiceService) {}

  @Get()
  getHello(): string {
    return this.testServiceService.getHello();
  }
}
