import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Identity } from './entities/identity.entity'
import { CreateIdentityDto } from './dto/create-identity.dto'

@Injectable()
export class IdentitiesService {
	constructor(@InjectRepository(Identity) private identityRepository: Repository<Identity>) {}

	async create(identity: CreateIdentityDto): Promise<void> {
		await this.identityRepository.insert(identity)
	}

	async findAll(): Promise<Identity[]> {
		return await this.identityRepository.find()
	}

	findOne(id: string): Promise<Identity | null> {
		return this.identityRepository.findOneBy({ id: id })
	}

	// async update(id: string): Promise<void> {
	// 	return `This action updates a #${id} identity`
	// }

	async remove(id: string): Promise<void> {
		await this.identityRepository.delete(id)
	}
}
