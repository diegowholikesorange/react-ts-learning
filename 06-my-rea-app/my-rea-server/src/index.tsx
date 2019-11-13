import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import'

const typeDefs = importSchema('./src/schema.graphql')


const resolvers = {
    Query: {
        pageContent: () => {
            return new PageContent();
        }
    },
    PageContent: {
        welcome: (root, {title: title, name}) => {
            return `Hello ${title}. ${name || 'World!'}`
        }
    }
};

class PageContent {
    welcome: String
};

const server = new ApolloServer({ resolvers, typeDefs });

server.listen()
    .then(({ url }) => console.log(`Server ready at ${url}. `));

