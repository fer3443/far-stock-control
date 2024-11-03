import { initialData } from '../src/seed/initialData'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main(){
	//1.Borrar registros previos
	await prisma.product.deleteMany()
	await prisma.category.deleteMany()
	await prisma.inventory.deleteMany()
	await prisma.user.deleteMany()
	await prisma.auditoryInventory.deleteMany()

	//2. Crear registros
	const { category, products, user} = initialData;
	await prisma.category.createMany({
		data:category
	})

	const categoriesDB = await prisma.category.findMany();
	const categoriesMap = categoriesDB.reduce((map, category) => {
		map[category.name] = category.id;
		return map
	},{} as Record<string, string>);//<string=Galletas,string=category.id

	products.forEach(async(product) => {
		const {type} = product
			await prisma.product.create({
				data: {
					...product,
					categoryId:categoriesMap[type]
				}
			})
	} )
	await prisma.user.createMany({
		data:user
	})
	console.log('seed executed')
}

main().then(async () => {
	await prisma.$disconnect()
})
.catch(async (e) => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
})