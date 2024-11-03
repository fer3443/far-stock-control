import { SeedData } from "@/Interface/product";

export const initialData:SeedData = {
	products: [ 
		{
			name: 'Chocolate Misky',
			description: 'Chocolate negro en barra de alta calidad, 70% cacao',
			type:'Chocolates',
			price: 750,
			stock: 100,
		},
		{
			name: 'Galletas Dulce Vida',
			description: 'Galletas de avena con chispas de chocolate',
			type:'Galletas',
			price: 500,
			stock: 200,
		},
		{
			name: 'Jugo Tropical',
			description: 'Jugo de frutas tropicales, sin azúcar añadida',
			type:'Bebidas',
			price: 300,
			stock: 150,
		},
		{
			name: 'Mix de Frutos Secos',
			description: 'Mezcla de almendras, nueces, y uvas pasas',
			type:'Snacks',
			price: 1200,
			stock: 50,
		},
	],
	category: [
		{
			name: 'Chocolates',
		},
		{
			name: 'Galletas',
		},
		{
			name: 'Bebidas',
		},
		{
			name: 'Snacks',
		},
	],
	inventory:[
		{
			quantity: 20,
			type: 'ENTRADA',
			date: new Date('2024-11-01T10:00:00Z'),
		},
		{
			quantity: -15,
			type: 'SALIDA',
			date: new Date('2024-11-01T11:30:00Z'),
		},
		{
			quantity: 50,
			type: 'ENTRADA',
			date: new Date('2024-11-02T08:15:00Z'),
		},
		{
			quantity: -10,
			type: 'SALIDA',
			date: new Date('2024-11-02T09:45:00Z'),
		},
	],
	user:[
		{
			name: 'Carlos Pérez',
			email: 'carlos.perez@example.com',
			rol: 'ADMIN',
		},
		{
			name: 'Ana García',
			email: 'ana.garcia@example.com',
			rol: 'EMPLEADO',
		},
		{
			name: 'Luis Martínez',
			email: 'luis.martinez@example.com',
			rol: 'EMPLEADO',
		},
		{
			name: 'Maria López',
			email: 'maria.lopez@example.com',
			rol: 'ADMIN',
		},
	]
}