import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(title: String, name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_, { title: title, name }) => {
      return `Hello ${title}. ${name || 'World!'}`
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('GraphQL Server is running on http://localhost:4000'))
