import gql from 'graphql-tag';

export const HELLO_QUERY = gql`
    query Hello($title: String, $surname: String, $postcode: String) {
        pageContent {
            welcome(title:$title, name:$surname)
            properties(postcode:$postcode) {
                address
            }
        }
    }
`
