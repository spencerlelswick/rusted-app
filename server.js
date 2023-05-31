import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'

import connectDB from './db/connect.js'

import authRouter from './routes/authRoutes.js'
import baseRouter from './routes/baseRoutes.js'

import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

const port = process.env.PORT || 5001

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json())

app.get('/api/v1/', (req, res) => {
  res.json({ msg: 'testing' })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/base', authenticateUser, baseRouter)

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
