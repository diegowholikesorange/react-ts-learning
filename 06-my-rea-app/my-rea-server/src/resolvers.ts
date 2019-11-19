import {Resolvers} from "./generated/graphql";

export const resolvers: Resolvers = {
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

