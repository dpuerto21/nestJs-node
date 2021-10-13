import { Body, Controller, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
	@Post()
	crearMarca(@Body() Tdata: string) {
		return {
			message: 'Marca Creada  ',
			Tdata
		};
	}
}
