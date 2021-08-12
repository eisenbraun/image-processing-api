import express from 'express'
import routes from './routes'
// import Debug from 'debug'
import winston, { format } from 'winston'

const app = express()
const port = 3000
// const log = Debug('http')
const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.simple()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

app.use('/api', routes)

app.listen(port, () => {
  logger.info(`server started at http://localhost:${port}`)
})

export default app
