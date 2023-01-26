import { Configuration, OpenAIApi } from "openai"

/**
 * Use OpenAPI to perform moderation on an input string
 * @params input:string
 * @throws Exception
 */

const input = process.argv[2]

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default class Service {
  async run (input: string) {
    try {
      const response = await openai.createModeration({
        input
      })
      return response.data.results
    } catch (error) {
      throw new Error(error)
    }
  }
}


