import { RESTDataSource } from '@apollo/datasource-rest';
import { Category } from './generated/graphql';

export class ChuckAPI extends RESTDataSource {
  override baseURL = 'https://api.chucknorris.io/jokes/';

  async getRandomJoke(category: string): Promise<any> {
    return await this.get(`random/?category=${category}`);
  }

  async getAllCategories(): Promise<Category[]> {
    const data = await this.get('categories');
    return data.map((name: string) => ({ name }));
  }
}