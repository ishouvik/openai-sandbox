import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.STAGE ? `./.env.${process.env.STAGE}` : './.env'
})

import '../../init'
import app from '../../app'

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
