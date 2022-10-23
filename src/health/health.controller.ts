import { Controller, Get } from '@nestjs/common'
import { HealthCheckService, HealthCheck } from '@nestjs/terminus'
import { AppHealthIndicator } from 'src/app.health'
import { DatabaseHealthIndicator } from 'src/database.health'

@Controller('health')
export class HealthController {
	constructor(
		private health: HealthCheckService,
		private appHealthIndicator: AppHealthIndicator,
		private databaseHealthIndicator: DatabaseHealthIndicator,
	) {}

	@Get()
	@HealthCheck()
	check() {
		return this.health.check([
			() => this.appHealthIndicator.isHealthy('application'),
			() => this.databaseHealthIndicator.isHealthy('database'),
		])
	}

	@Get('application')
	@HealthCheck()
	checkApplication() {
		return this.health.check([() => this.appHealthIndicator.isHealthy('application')])
	}

	@Get('database')
	@HealthCheck()
	checkDatabase() {
		return this.health.check([() => this.databaseHealthIndicator.isHealthy('database')])
	}
}
