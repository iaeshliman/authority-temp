import applicationConfig from './application.config'
import sequelizeConfig from './sequelize.config'

export default () => ({
	application: applicationConfig(),
	sequelize: sequelizeConfig(),
})
