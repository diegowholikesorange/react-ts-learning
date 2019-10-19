import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      return `Hello ${name || 'World!'}`
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('GraphQL Server is running on http://localhost:4000'))
