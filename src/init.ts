import 'module-alias/register'
import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.STAGE ? `./.env.${process.env.STAGE}` : './.env'
})
