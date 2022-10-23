export default () => ({
	environment: process.env.NODE_ENV,
	name: process.env.APPLICATION_NAME,
	version: process.env.APPLICATION_VERSION,
	port: Number(process.env.APPLICATION_PORT),
})
