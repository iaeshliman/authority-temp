import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { HealthModule } from './health/health.module'
import * as Joi from 'joi'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
			// Validates environment variables
			validationSchema: Joi.object({
				NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
				APPLICATION_NAME: Joi.string().default('authority'),
				APPLICATION_VERSION: Joi.string()
					.pattern(new RegExp('^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-[a-zA-Z0-9]+)?$'))
					.required(),
				APPLICATION_PORT: Joi.number().integer().min(0).max(65535).default(3000),
			}),
		}),
		HealthModule,
	],
})
export class AppModule {}
