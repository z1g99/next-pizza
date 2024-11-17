import {prisma} from './prisma-client'
import {hashSync} from 'bcrypt'
import {categories, ingredients, products} from './constants'

async function up() {
	await prisma.user.createMany({
		data: [
			{
				firstName: 'Иван',
				email: 'ivan@test.com',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'USER'
			},
			{
				firstName: 'Admin',
				email: 'admin@test.com',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'ADMIN'
			},
		]
	})
	
	await prisma.category.createMany({
		data: categories
	})
	
	await prisma.ingredient.createMany({
		data: ingredients
	})
	
	await prisma.product.createMany({
		data: products
	})
	
	const pizza1 = await prisma.product.create({
		data: {
			name: 'Пепперони фреш',
			imageUrl:
				'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(0, 5),
			},
		},
	})
	
	const pizza2 = await prisma.product.create({
		data: {
			name: 'Сырная',
			imageUrl:
				'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(5, 10),
			},
		},
	})
	
	const pizza3 = await prisma.product.create({
		data: {
			name: 'Чоризо фреш',
			imageUrl:
				'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(10, 40),
			},
		},
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.log(e)
		await prisma.$disconnect()
		process.exit(1)
	})