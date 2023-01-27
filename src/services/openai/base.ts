import { Configuration, OpenAIApi } from "openai"

export default class BaseService {
  openai: OpenAIApi

  constructor () {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    this.openai = new OpenAIApi(configuration)
  }
}
