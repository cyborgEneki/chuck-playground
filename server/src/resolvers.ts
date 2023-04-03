import { Resolvers } from '../src/generated/graphql';

const resolvers: Resolvers = {
  Query: {
    // TypeScript now complains about the below resolver because
    // the data returned by this resolver doesn't match the schema type
    // (i.e., type Query { books: [Book] })
    randomJoke: async (_, { category }, { dataSources }) => {
      return dataSources.chuckAPI.getRandomJoke(category);
    },
    categories: async (_, __, { dataSources }) => {
      return dataSources.chuckAPI.getAllCategories();
    },
  },
}

export default resolvers;