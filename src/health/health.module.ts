import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { HttpModule } from '@nestjs/axios'
import { HealthController } from './health.controller'
import { AppHealthIndicator } from '../app.health'

@Module({
	imports: [TerminusModule, HttpModule],
	controllers: [HealthController],
	providers: [AppHealthIndicator],
})
export class HealthModule {}
