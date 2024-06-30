import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPublicKeyUseCase {
  async execute() {
    return 'public key';
  }
}
