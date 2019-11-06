import gql from 'graphql-tag';

export const HELLO_QUERY = gql`
    query HelloQuery {
        hello(name:"Guru")
    }
`
