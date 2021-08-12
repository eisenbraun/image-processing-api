import express, { Router, Request, Response } from 'express'
import images from './api/images'

const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
  res.sendStatus(404)
})

routes.use('/images', images)

export default routes
