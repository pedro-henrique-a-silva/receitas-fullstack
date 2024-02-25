import { Test, TestingModule } from '@nestjs/testing';
import { DonesService } from './dones.service';

describe('DonesService', () => {
  let service: DonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonesService],
    }).compile();

    service = module.get<DonesService>(DonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
