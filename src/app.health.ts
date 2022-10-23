import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus'

@Injectable()
export class AppHealthIndicator extends HealthIndicator {
	constructor(private configService: ConfigService) {
		super()
	}

	async isHealthy(key: string): Promise<HealthIndicatorResult> {
		return this.getStatus(key, true, this.configService.get('application'))
	}
}
