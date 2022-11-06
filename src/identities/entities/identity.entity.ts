import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Identity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@Column()
	type: string
}
