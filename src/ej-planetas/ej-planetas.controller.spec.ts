import { Test, TestingModule } from '@nestjs/testing';
import { EjPlanetasController } from './ej-planetas.controller';
import { EjPlanetasService } from './ej-planetas.service';

describe('EjPlanetasController', () => {
  let controller: EjPlanetasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EjPlanetasController],
      providers: [EjPlanetasService],
    }).compile();

    controller = module.get<EjPlanetasController>(EjPlanetasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
