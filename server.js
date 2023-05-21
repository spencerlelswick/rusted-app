import express from 'express'
import dotenv from 'dotenv'

import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import connectDB from './db/connect.js'
const app = express()
dotenv.config()

const port = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send('hello')
})

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
