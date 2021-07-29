import express from 'express'
import routes from './routes'

const app = express()
const port = 3000

const add = (a:number, b:number) => {
  return a + b
}

app.use('/api', routes)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

export default add
