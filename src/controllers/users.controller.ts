import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
	@Get(':nombre/cedula/:cc/:id')
	getUsuario(@Param('nombre') nombre: string, @Param('id') NombreId: number, @Param('cc') cedula: number) {
		console.log(nombre, NombreId, cedula);

		return {
			message: ` Peticion del ${nombre} con id ${NombreId} y cedula ${cedula}`
		};
	}

	@Get('query')
	getQuery(
		@Query('nombre') nombre: string,
		@Query('color') color: string,
		@Query('sabor') sabor: string,
		@Query('query') query: any
	) {
		console.log(query);
		const metadata = { nombre, color, sabor };

		return {
			message: 'Descripcion de un dulce',
			data: [],
			metadata
		};
	}
}
