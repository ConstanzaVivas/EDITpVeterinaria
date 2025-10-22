import { Test, TestingModule } from '@nestjs/testing';
import { MascoHijosController } from './masco-hijos.controller';

describe('MascoHijosController', () => {
  let controller: MascoHijosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MascoHijosController],
    }).compile();

    controller = module.get<MascoHijosController>(MascoHijosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
