import {prisma} from './prisma-client'
import {hashSync} from 'bcrypt'
import {categories, ingredients, products} from './constants'

const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const price = (pizza: boolean)=> {
	return pizza ? randomNumber(150, 500) : randomNumber(50, 250)
}

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
	
	await prisma.productVariant.createMany({
		data: [
			// Пицца "Пепперони фреш"
			{ productId: pizza1.id, pizzaType: 'THIN', size: 'SMALL', price: price(true) },
			{ productId: pizza1.id, pizzaType: 'REGULAR', size: 'MEDIUM', price: price(true) },
			{ productId: pizza1.id, pizzaType: 'REGULAR', size: 'LARGE', price: price(true) },
			
			// Пицца "Сырная"
			{ productId: pizza2.id, pizzaType: 'THIN', size: 'SMALL', price: price(true) },
			{ productId: pizza2.id, pizzaType: 'THIN', size: 'MEDIUM', price: price(true) },
			{ productId: pizza2.id, pizzaType: 'THIN', size: 'LARGE', price: price(true) },
			{ productId: pizza2.id, pizzaType: 'REGULAR', size: 'SMALL', price: price(true) },
			{ productId: pizza2.id, pizzaType: 'REGULAR', size: 'MEDIUM', price: price(true) },
			{ productId: pizza2.id, pizzaType: 'REGULAR', size: 'LARGE', price: price(true) },
			
			// Пицца "Чоризо фреш"
			{ productId: pizza3.id, pizzaType: 'THIN', size: 'SMALL', price: price(true) },
			{ productId: pizza3.id, pizzaType: 'REGULAR', size: 'MEDIUM', price: price(true) },
			{ productId: pizza3.id, pizzaType: 'REGULAR', size: 'LARGE', price: price(true) },
			
			// Остальные продукты
			{ productId: 1, price: price(false) },
			{ productId: 2, price: price(false) },
			{ productId: 3, price: price(false) },
			{ productId: 4, price: price(false) },
			{ productId: 5, price: price(false) },
			{ productId: 6, price: price(false) },
			{ productId: 7, price: price(false) },
			{ productId: 8, price: price(false) },
			{ productId: 9, price: price(false) },
			{ productId: 10, price: price(false) },
			{ productId: 11, price: price(false) },
			{ productId: 12, price: price(false) },
			{ productId: 13, price: price(false) },
			{ productId: 14, price: price(false) },
			{ productId: 15, price: price(false) },
			{ productId: 16, price: price(false) },
			{ productId: 17, price: price(false) },
		]
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
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