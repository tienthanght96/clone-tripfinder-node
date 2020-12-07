import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { Database } from '@database/connect'
import { AppConfigs } from '@config/index'
import { AppEnviroments } from '@typings/App'

const app: Application = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (AppConfigs.NODE_ENV !== AppEnviroments.production) {
  app.use(morgan('short'))
}
app.get('/', (req: Request, res: Response) => {
  res.send('TS App is Running')
})
app.get('/api/', (req: Request, res: Response) => {
  res.json({
    data: {},
    status: 'success',
  }).status(200)
})
const PORT = AppConfigs.SERVER_PORT || 3000

const startServer = async () => {
  try {
    Database.createConnection()
    app.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`)
    })
  } catch (error) {
    process.exit(1)
  }
}

startServer()
