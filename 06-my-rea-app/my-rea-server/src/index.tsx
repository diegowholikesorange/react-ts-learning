import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import'
import resolvers from './resolvers';

const typeDefs = importSchema('./src/schema.graphql')

const server = new ApolloServer({ resolvers, typeDefs });

server.listen()
    .then(({ url }) => console.log(`Server ready at ${url}. `));

