import '../init'
import Moderation from "../services/openai/moderation";

const moderation = new Moderation()

const input = process.argv[2]

try {
  const res = await moderation.run(input)
  console.log(res)
} catch (error) {
  throw new Error(error)
}