enum IdentityTypes {
	USER = 'user',
	SERVICE_ACCOUNT = 'service account',
}

export class CreateIdentityDto {
	name: string
	type: IdentityTypes
}
