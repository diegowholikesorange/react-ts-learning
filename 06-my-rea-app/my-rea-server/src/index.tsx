import {ApolloServer} from 'apollo-server';
import {importSchema} from 'graphql-import'
import {Resolvers} from "./generated/graphql";

const typeDefs = importSchema('./src/schema.graphql')


const resolvers: Resolvers = {
    Query: {
        pageContent: () => {
            return {};
        }
    },
    PageContent: {
        welcome: (root, {title: title, name}) => {
            return `Hello ${title}. ${name || 'World!'}`
        }
    },
};

const server = new ApolloServer({resolvers, typeDefs});

server.listen()
    .then(({url}) => console.log(`Server ready at ${url}. `));

