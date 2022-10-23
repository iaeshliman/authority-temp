import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { HttpModule } from '@nestjs/axios'
import { HealthController } from './health.controller'
import { AppHealthIndicator } from 'src/app.health'
import { DatabaseHealthIndicator } from 'src/database.health'

@Module({
	imports: [TerminusModule, HttpModule],
	controllers: [HealthController],
	providers: [AppHealthIndicator, DatabaseHealthIndicator],
})
export class HealthModule {}
