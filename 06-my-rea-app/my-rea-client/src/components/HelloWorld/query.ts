import gql from 'graphql-tag';

export const HELLO_QUERY = gql`
    query Hello($surname:String)  {
      hello(name:$surname)
    }
`
