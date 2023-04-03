import { Resolvers } from '../src/generated/graphql';

const resolvers: Resolvers = {
  Query: {
    randomJoke: async (_, { category }, { dataSources }) => {
      return dataSources.chuckAPI.getRandomJoke(category);
    },
    categories: async (_, __, { dataSources }) => {
      return dataSources.chuckAPI.getAllCategories();
    }
  },
}

export default resolvers;