import '../../init'
import Service from "@services/openai/completion";

const service = new Service()

module.exports.handler = async function (input) {
  try {
    const res = await service.run(input)
    return {
      input,
      res
    }
  } catch (error) {
    throw new Error(error)
  }
}
