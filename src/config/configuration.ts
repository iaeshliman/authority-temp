import applicationConfig from './application.config'
import databaseConfig from './database.config'

export default () => ({
	application: applicationConfig(),
	database: databaseConfig(),
})
