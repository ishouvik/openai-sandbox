import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

/**
 * Routes
 */
import apiV1Moderation from '@routes/api/v1/moderation'

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.disable('x-powered-by')

app.use('*/api/v1/moderation', apiV1Moderation)

export default app
