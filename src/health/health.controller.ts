import { Controller, Get } from '@nestjs/common'
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus'
import { AppHealthIndicator } from '../app.health'

@Controller('health')
export class HealthController {
	constructor(
		private health: HealthCheckService,
		private http: HttpHealthIndicator,
		private appHealthIndicator: AppHealthIndicator,
	) {}

	@Get()
	@HealthCheck()
	check() {
		return this.health.check([
			() => this.appHealthIndicator.isHealthy('application'),
			() => this.http.pingCheck('nestjs-core', 'https://docs.nestjs.com'),
		])
	}
}
