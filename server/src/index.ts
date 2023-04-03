import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ChuckAPI } from './chuck-api';
import { readFileSync } from 'fs';
import resolvers from "../src/resolvers"
const typeDefs = readFileSync('../server/src/schema.graphql', { encoding: 'utf-8'});

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
