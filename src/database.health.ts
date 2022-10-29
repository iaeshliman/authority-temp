import { Injectable } from '@nestjs/common'
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus'
import { DataSource } from 'typeorm'

@Injectable()
export class DatabaseHealthIndicator extends HealthIndicator {
	constructor(private dataSource: DataSource) {
		super()
	}

	async isHealthy(key: string): Promise<HealthIndicatorResult> {
		const connected = this.dataSource.isInitialized
		if (connected) return this.getStatus(key, true)
		else throw new HealthCheckError('database check failed', this.getStatus(key, false))
	}
}
