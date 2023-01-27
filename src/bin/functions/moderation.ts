import '../../init'
import Moderation from "@services/openai/moderation";

const moderation = new Moderation()

module.exports.handler = async function (input) {
  try {
    const res = await moderation.run(input)
    return {
      input,
      res
    }
  } catch (error) {
    throw new Error(error)
  }
}
