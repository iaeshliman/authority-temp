import { Injectable } from '@nestjs/common'
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus'
import { Sequelize } from 'sequelize-typescript'

@Injectable()
export class DatabaseHealthIndicator extends HealthIndicator {
	constructor(private sequelize: Sequelize) {
		super()
	}

	async isHealthy(key: string): Promise<HealthIndicatorResult> {
		try {
			await this.sequelize.authenticate()
			return this.getStatus(key, true)
		} catch (error) {
			throw new HealthCheckError(
				'database check failed',
				this.getStatus(key, false, { error: error.name, message: error.message }),
			)
		}
	}
}
