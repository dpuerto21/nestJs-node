import { Module } from '@nestjs/common';
import { EjPlanetasService } from './ej-planetas.service';
import { EjPlanetasController } from './ej-planetas.controller';

@Module({
  controllers: [EjPlanetasController],
  providers: [EjPlanetasService]
})
export class EjPlanetasModule {}
