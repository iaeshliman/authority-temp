import { RequestMethod } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Enable shutdown hook listeners for health module
	app.enableShutdownHooks()

	// Add prefix to all routes
	app.setGlobalPrefix('api', {
		exclude: [{ path: 'health', method: RequestMethod.GET }],
	})

	await app.listen(3000)
}
bootstrap()
