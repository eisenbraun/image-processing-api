import express, { Router, Request, Response } from 'express'
import fs from 'fs'
import utilities from '../../utilities'


const images: Router = express.Router()

images.get('/', (req: Request, res: Response) => {
  const { filename, width, height } = req.query

  fs.access(utilities.fullImagePath(filename as string), fs.constants.F_OK, (err) => {
    if (err) {
      res.status(400).send('Bad Request')
    } else {
      fs.access(utilities.thumbImagePath(filename as string, width as string, height as string), fs.constants.F_OK, (err) => {
        if (err) {
          // thumbnail doesn't exist
          utilities.resizeImage(filename as string, width as string, height as string)
            .then(() => {
              fs.readFile(utilities.thumbImagePath(filename as string, width as string, height as string), function (err, data) {
                if (err) {
                  throw err
                }
                res.writeHead(200, {'Content-Type': 'image/jpeg'})
                res.end(data)
              })
            }) 
        } else {
          // thumbnail already exists
          fs.readFile(utilities.thumbImagePath(filename as string, width as string, height as string), function (err, data) {
            if (err) {
              throw err
            }
            res.writeHead(200, {'Content-Type': 'image/jpeg'})
            res.end(data)
          })
        } 
      })
    }
  })
})

export default images
