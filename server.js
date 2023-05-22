import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
import 'express-async-errors'

import connectDB from './db/connect.js'

import authRouter from './routes/authRoutes.js'

import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

const port = process.env.PORT || 5001

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello')
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server is listening on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
