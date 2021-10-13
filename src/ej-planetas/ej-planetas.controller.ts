import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { EjPlanetasService } from './ej-planetas.service';
import { UpdateEjPlanetaDto } from './dto/update-ej-planeta.dto';

@Controller('planeta')
export class EjPlanetasController {
	constructor(private readonly ejPlanetasService: EjPlanetasService) {}

	@Get('')
	findOne(@Query('id') id: number) {
		return this.ejPlanetasService.findOne(id);
	}

	// @Get('query')
	// @HttpCode(HttpStatus.PARTIAL_CONTENT)
	// param(
	// 	@Query('tamaño') tamaño = 100,
	// 	@Query('gravedad') gravedad: CreateEjPlanetaDto,
	// 	@Query('color') color: string
	// ) {
	// 	return this.ejPlanetasService.findAll();
	// }

	@Get('todos')
	@HttpCode(HttpStatus.ACCEPTED)
	Planetas(@Query('tamaño') tamaño = 100, @Query('gravedad') gravedad: string, @Query('color') color: string) {
		return this.ejPlanetasService.findAll();
	}

	@Get(':planetaId')
	getPlaneta(@Param('planetaId') nameplaneta: number) {
		return this.ejPlanetasService.findOne(nameplaneta);
	}

	@Post()
	createplaneta(@Body() createPlaneta: any) {
		return this.ejPlanetasService.crear(createPlaneta);
	}

	@Put(':id')
	@HttpCode(HttpStatus.ACCEPTED)
	Actualizarplaneta(@Param('id') id: number, @Body() update: any) {
		return {
			id,
			update
		};
	}
	@Delete(':id')
	EliminarPlaneta(@Param('id') id: number) {
		return {
			id
		};
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateEjPlanetaDto: UpdateEjPlanetaDto) {
		return this.ejPlanetasService.update(+id, updateEjPlanetaDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.ejPlanetasService.remove(+id);
	}
}
