import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
  type Query {
    pageContent(title: String, name: String): String
  }
`;

const resolvers = {
  Query: {
    pageContent: (root, { title: title, name }, context, info) => {
      return `Hello ${title}. ${name || 'World!'}`
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('GraphQL Server is running on http://localhost:4000'))
