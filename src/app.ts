import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.disable('x-powered-by')

app.get('*', (req, res, next) => {
  res.json({
    hello: 'world'
  })

  next()
})

export default app
