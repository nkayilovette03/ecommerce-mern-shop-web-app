import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoute from './routes/productRoute.js'

import products from './data/products.js'

dotenv.config()

ConnectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Api is running...')
})

app.use('/api/products', productRoute)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
