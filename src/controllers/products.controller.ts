import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
	@Get()
	getProduct(@Param() params: any) {
		const { nombre, id } = params;
		return {
			message: `nombre${nombre} & id ${id}`
		};
	}

	@Get('dos')
	getQuery(@Query('limit') limit = 40, @Query('offset') offset = 400, @Query('brand') brand: string) {
		return {
			message: `limit${limit} offset${offset} brand${brand} `
		};
	}
}
