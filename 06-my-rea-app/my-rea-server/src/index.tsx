import {ApolloServer} from 'apollo-server';
import {importSchema} from 'graphql-import'
import * as queryResolvers from "./resolvers";

const schema = importSchema('./src/schema.graphql')
const server = new ApolloServer({resolvers: queryResolvers.resolvers, typeDefs: schema});

server.listen()
    .then(({url}) => console.log(`Server ready at ${url}. `));

