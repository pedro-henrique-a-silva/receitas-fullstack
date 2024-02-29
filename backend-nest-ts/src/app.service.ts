import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return `I'm alive! Working on a nest server.`;
  }
}
