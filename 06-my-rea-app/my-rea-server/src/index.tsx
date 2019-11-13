import {GraphQLServer} from 'graphql-yoga'


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
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});

server.start(() => console.log('GraphQL-Yoga Server is running on http://localhost:4000'))
