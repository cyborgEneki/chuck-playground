import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ChuckAPI } from './chuck-api';

const typeDefs = `#graphql
  type Category {
    name: String
  }

  type Joke {
    body: String
    category: Category
  }

  type Query {
    categories: [Category],
    randomJoke: Joke
  }
`;

const resolvers = {
  Query: {
    randomJoke: async (_, { category }, { dataSources }) => {
      return dataSources.chuckAPI.getRandomJoke(category);
    },
    categories: async (_, __, { dataSources }) => {
      return dataSources.chuckAPI.getAllCategories();
    },
  },
};

interface ContextValue {
  dataSources: {
    chuckAPI: ChuckAPI;
  };
}


const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        chuckAPI: new ChuckAPI({ cache }),
      },
    };
  },
  listen: { port: Number(process.env.API_PORT) || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
