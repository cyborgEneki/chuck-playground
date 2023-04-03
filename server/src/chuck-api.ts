import { RESTDataSource } from '@apollo/datasource-rest';
import { Category, Joke } from './generated/graphql';

export class ChuckAPI extends RESTDataSource {
  override baseURL = 'https://api.chucknorris.io/jokes/';

  async getRandomJoke(category: string): Promise<Joke[]> {
    return this.get<Joke[]>(`random/${encodeURIComponent(category)}`);
  }

  async getAllCategories(limit = '10'): Promise<Category[]> {
    const data = await this.get('categories', {
      params: {
        per_page: limit
      },
    });
    return data.results;
  }
}