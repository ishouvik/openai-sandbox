import BaseService from "./base"

export default class Service extends BaseService {
  async run(input:string) {
    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: input,
        max_tokens: 50,
        temperature: 0.9,
      })
      return response.data.choices
    } catch (error) {
      throw new Error(error)
    }
  }
}
