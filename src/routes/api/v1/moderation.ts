import express from 'express'
import Moderation from "@services/openai/moderation"

const router = express.Router()
const moderation = new Moderation()

router.post('*', async (req, res, next) => {
  const { text } = req.body
  const result = await moderation.run(text)

  res.json({
    text,
    result
  })
  next()
})

export default router
