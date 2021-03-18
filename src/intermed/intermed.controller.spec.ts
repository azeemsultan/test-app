import { Test, TestingModule } from '@nestjs/testing';
import { IntermedController } from './intermed.controller';

describe('IntermedController', () => {
  let controller: IntermedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntermedController],
    }).compile();

    controller = module.get<IntermedController>(IntermedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
