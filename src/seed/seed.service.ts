import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  seedDB() {
    return 'Seed Executed Succesfully';
  }
}
