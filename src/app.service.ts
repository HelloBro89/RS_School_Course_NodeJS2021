import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(private test: (param: string) => string) { }

  // eslint-disable-next-line class-methods-use-this
  getHello(): string {
    return "Hello Nest vsratiy";
    // return this.test("Hello Nest vsratiy");
  }
}
