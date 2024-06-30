import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

interface IInput {
  //
}

@Injectable()
export class SignUpBusinessUseCase {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}

  async execute(data: IInput) {
    console.log(this.cacheService.store);
    // await this.cacheService.set('key12', 'value1', 10000);
    // const keys = await this.cacheService.get('key12');
    // console.log(keys);
  }
}
