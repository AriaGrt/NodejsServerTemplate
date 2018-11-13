import Server from './server'

const env: string = process.env.NODE_ENV || 'dev'
const server = new Server(env)

server.start()