import {prisma} from './prisma-client'
import {hashSync} from 'bcrypt'

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