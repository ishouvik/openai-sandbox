import BaseService from "./base"

export default class Service extends BaseService {
  async run (input: string) {
    try {
      const response = await this.openai.createModeration({
        input
      })
      return response.data.results
    } catch (error) {
      throw new Error(error)
    }
  }
}


