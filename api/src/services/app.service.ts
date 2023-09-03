import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Get(): string {
    return 'Hello World!';
  }
}
