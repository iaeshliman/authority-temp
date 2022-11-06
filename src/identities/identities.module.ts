import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IdentitiesService } from './identities.service'
import { IdentitiesController } from './identities.controller'
import { Identity } from './entities/identity.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Identity])],
	controllers: [IdentitiesController],
	providers: [IdentitiesService],
})
export class IdentitiesModule {}
