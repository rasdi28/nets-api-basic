import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello rasdi';
  }

  getTset():string {
    return "Hello";
  }
}
