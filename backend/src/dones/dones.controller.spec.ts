import { Test, TestingModule } from '@nestjs/testing';
import { DonesController } from './dones.controller';

describe('DonesController', () => {
  let controller: DonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonesController],
    }).compile();

    controller = module.get<DonesController>(DonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
