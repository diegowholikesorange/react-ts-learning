import gql from 'graphql-tag';

export const HELLO_QUERY = gql`
    query Hello($title: String, $surname: String) {
      pageContent {
        welcome(title:$title, name:$surname)
      }
    }
`
