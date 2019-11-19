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
        },
        properties: (root, {postcode: postcode}) => {
            return [{address: "1 Main Street "+postcode}, {address: "55 Central Ave"}]
        }
    }
};

